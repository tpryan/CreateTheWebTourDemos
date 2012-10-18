/*
 * The MIT License
 * 
 * Copyright (c) 2011 Adobe Systems Incorporated 
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


#ifndef WTF_BinaryHeap_h
#define WTF_BinaryHeap_h

#include "Vector.h"

namespace WTF {

    template<typename T, size_t inlineCapacity = 0>
    class BinaryHeap {
        WTF_MAKE_FAST_ALLOCATED;
    public:
        typedef Vector<T, inlineCapacity> Buffer;
        
        T pop();
        void push(const T&);
        
        const T& peek() const { return m_buffer.first(); }
        
        bool isEmpty() const { return m_buffer.isEmpty(); }

    private:
        Buffer m_buffer;
    };
    
    template<typename T, size_t inlineCapacity>
    T BinaryHeap<T, inlineCapacity>::pop()
    {
        T value = m_buffer[0];
        
        unsigned pos = 0;
        for (;;) {
            unsigned child = (pos << 1) + 1;
                        
            if (child >= m_buffer.size())
                break;
            
            // take the other child if it exists and is smaller
            if (child < m_buffer.size() - 1 && m_buffer[child + 1] < m_buffer[child])
                ++child;
            
            // break if even the smaller child is bigger than the one we have to fit
            if (m_buffer.last() < m_buffer[child])
                break;
            
            std::swap(m_buffer[child], m_buffer[pos]);
            pos = child;
        }
        
        std::swap(m_buffer.last(), m_buffer[pos]);
        
        m_buffer.resize(m_buffer.size() - 1);

        return value;
    }
    
    template<typename T, size_t inlineCapacity>
    void BinaryHeap<T, inlineCapacity>::push(const T& value)
    {
        m_buffer.resize(m_buffer.size() + 1);
        unsigned pos = m_buffer.size() - 1;
        while (pos) {
            unsigned parent = (pos - 1) >> 1;
            if (m_buffer[parent] < value)
                break;
            std::swap(m_buffer[pos], m_buffer[parent]);
            pos = parent;
        }
        m_buffer[pos] = value;
    }

} // namespace WTF

using WTF::BinaryHeap;

#endif // WTF_BinaryHeap_h
