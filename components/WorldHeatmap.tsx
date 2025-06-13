'use client';

import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

export function WorldHeatmap() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <ComposableMap projectionConfig={{ scale: 120 }} className="w-full h-auto">
        <Geographies geography="https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: { fill: '#ccc', outline: 'none' },
                  hover: { fill: '#a855f7', outline: 'none' },
                  pressed: { fill: '#9333ea', outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}

export default WorldHeatmap;
