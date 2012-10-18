/*
 * Copyright (C) 2010 Apple Inc.  All rights reserved.
 * Copyright (C) 2011 Adobe Systems Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE INC. ``AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE INC. OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. 
 */

#ifndef ColumnInfo_h
#define ColumnInfo_h

#include <wtf/Vector.h>
#include "IntRect.h"
#include "FloatPoint.h"
#include "SegmentController.h"

namespace WebCore {

    
#if ENABLE(REGIONS)
class RenderRegion;
    
struct RegionInfo
{
    IntRect rect;
    RenderRegion* renderRegion;
};
#endif

class ColumnInfo {
    WTF_MAKE_NONCOPYABLE(ColumnInfo); WTF_MAKE_FAST_ALLOCATED;
public:
    ColumnInfo()
        : m_desiredColumnWidth(0)
        , m_desiredColumnCount(1)
        , m_columnCount(1)
        , m_columnHeight(0)
        , m_minimumColumnHeight(0)
        , m_forcedBreaks(0)
        , m_maximumDistanceBetweenForcedBreaks(0)
        , m_forcedBreakOffset(0)
#if ENABLE(REGIONS)
        , m_applyRegionsToChildren(false)
        , m_hasWrapShapeOnRegions(false)
#endif
        { }
    
    int desiredColumnWidth() const { return m_desiredColumnWidth; }
    void setDesiredColumnWidth(int width) { m_desiredColumnWidth = width; }
    
    unsigned desiredColumnCount() const { return m_desiredColumnCount; }
    void setDesiredColumnCount(unsigned count) { m_desiredColumnCount = count; }

    unsigned columnCount() const { return m_columnCount; }
    int columnHeight() const { return m_columnHeight; }

    // Set our count and height.  This is enough info for a RenderBlock to compute page rects
    // dynamically.
    void setColumnCountAndHeight(int count, int height)
    { 
        m_columnCount = count;
        m_columnHeight = height;
    }
    void setColumnHeight(int height) { m_columnHeight = height; }

    void updateMinimumColumnHeight(int height) { m_minimumColumnHeight = std::max(height, m_minimumColumnHeight); }
    int minimumColumnHeight() const { return m_minimumColumnHeight; }

    int forcedBreaks() const { return m_forcedBreaks; }
    int forcedBreakOffset() const { return m_forcedBreakOffset; }
    int maximumDistanceBetweenForcedBreaks() const { return m_maximumDistanceBetweenForcedBreaks; }
    void clearForcedBreaks()
    { 
        m_forcedBreaks = 0;
        m_maximumDistanceBetweenForcedBreaks = 0;
        m_forcedBreakOffset = 0;
    }
    void addForcedBreak(int offsetFromFirstPage)
    { 
        ASSERT(!m_columnHeight);
        int distanceFromLastBreak = offsetFromFirstPage - m_forcedBreakOffset;
        if (!distanceFromLastBreak)
            return;
        m_forcedBreaks++;
        m_maximumDistanceBetweenForcedBreaks = std::max(m_maximumDistanceBetweenForcedBreaks, distanceFromLastBreak);
        m_forcedBreakOffset = offsetFromFirstPage;
    }

#if ENABLE(REGIONS)
    void clearRegions()
    {
        m_hasWrapShapeOnRegions = false;
        m_columnCount = 0;
        m_regions.clear();
    }
    
    bool hasRegions() const { return m_regions.size(); }
    
    bool applyRegionsToChildren() const { return m_applyRegionsToChildren; }
    void setApplyRegionsToChildren(bool value) { m_applyRegionsToChildren = value; }
    
    void addRegion(const IntRect& regionRect, RenderRegion* regionRenderer)
    {
        ++m_columnCount;
        RegionInfo region = { regionRect, regionRenderer };
        m_regions.append(region);
    }
    
    IntRect regionRectAt(size_t index) const
    {
        return m_regions[index].rect;
    }
    
    RenderRegion* regionRendererAt(size_t index) const
    {
        return m_regions[index].renderRegion;
    }
    
    int desiredRegionWidth(size_t index) const { return m_regions[index].rect.width(); }
    int desiredRegionHeight(size_t index) const { return m_regions[index].rect.height(); }
#endif // ENABLE(REGIONS)

    void setHasWrapShapeOnRegions(bool value) { m_hasWrapShapeOnRegions = value; }
    bool hasWrapShapeOnRegions() const { return m_hasWrapShapeOnRegions; }

private:

#if ENABLE(REGIONS)
    // used only for regions
    Vector<RegionInfo> m_regions;
#endif
    
    int m_desiredColumnWidth;
    unsigned m_desiredColumnCount;
    
    unsigned m_columnCount;
    int m_columnHeight;
    int m_minimumColumnHeight;
    int m_forcedBreaks; // FIXME: We will ultimately need to cache more information to balance around forced breaks properly.
    int m_maximumDistanceBetweenForcedBreaks;
    int m_forcedBreakOffset;

#if ENABLE(REGIONS)
    bool m_applyRegionsToChildren;
    bool m_hasWrapShapeOnRegions;
#endif
};

#if ENABLE(REGIONS)
class ColumnInfoMaintainer {
    WTF_MAKE_NONCOPYABLE(ColumnInfoMaintainer);
public:
    ColumnInfoMaintainer(ColumnInfo* colInfo, bool resetRegions)
    {
        if (colInfo && resetRegions && colInfo->hasRegions() && colInfo->applyRegionsToChildren()) {
            colInfo->setApplyRegionsToChildren(false);
            m_colInfo = colInfo;
        } else
            m_colInfo = 0;
    }
    
    ~ColumnInfoMaintainer()
    {
        if (m_colInfo)
            m_colInfo->setApplyRegionsToChildren(true);
    }
    
private:
    ColumnInfo* m_colInfo;
};
#endif

}

#endif
