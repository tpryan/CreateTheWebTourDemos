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

#ifndef PolygonShape_h
#define PolygonShape_h

#if ENABLE(REGIONS)

#include <wtf/RefCounted.h>
#include <wtf/Vector.h>
#include "Length.h"

namespace WebCore {

    class ComputedPolygonShape;
    class Length;
    class FloatSize;
    
    // FIXME: wind rule is in path.h -> extract it to separate file
    enum PolygonWindRule {
        POLY_RULE_NONZERO = 0,
        POLY_RULE_EVENODD = 1
    };
    
    struct LengthPoint
    {
        LengthPoint(Length x, Length y)
            : x(x)
            , y(y)
        {
        }
        Length x;
        Length y;
        
        bool operator != (const LengthPoint& other) const
        {
            return x != other.x || y != other.y;
        }
    };
    
    class PolygonShape : public RefCounted<PolygonShape> {
    public:
        static PassRefPtr<PolygonShape> create(PolygonWindRule windRule)
        {
            return adoptRef(new PolygonShape(windRule));
        }
        
        ~PolygonShape();
        
        const LengthPoint& operator[](int i) const;
        LengthPoint& operator[](int i);
        const LengthPoint& at(size_t i) const;
        LengthPoint& at(size_t i);
        
        bool operator==(const PolygonShape& o) const;
        bool operator!=(const PolygonShape& o) const;
        
        size_t size() const;
        void addPoint(const Length& xLength, const Length& yLength);

        ComputedPolygonShape* toComputedPolygonShape(const FloatSize& size) const;
        
    private:
        PolygonShape(PolygonWindRule windRule);
        
        Vector<LengthPoint> m_buffer;
        PolygonWindRule m_windRule;
    };
    
} // namespace WebCore

#endif //ENABLE(REGIONS)

#endif // PolygonShape_h
