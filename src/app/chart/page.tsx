"use client"
import { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts/core';
import {LineChart, ScatterChart, LineSeriesOption } from 'echarts/charts';
import { GridComponent, TooltipComponent, MarkLineComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import 'echarts/lib/component/markLine';
import { motion } from "framer-motion";

echarts.use([LineChart,ScatterChart, GridComponent, TooltipComponent, MarkLineComponent, CanvasRenderer]);

const ChartComponent = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const init =[40, 35, 25, 20, 10]
const [actualYValues,setActualYValues]=useState<number[]>(init)
const [inputData,setInputData]=useState({"Jan":null, "Feb":null, "Mar":null, "Apr":null, "May":null})
  useEffect(() => {
    

    const myChart = echarts.init(chartRef.current);


const options = {
  title: { text: "Example Trendline Chart" },
  tooltip: {},
  legend: { data: ["Actuals", "Projected"] },
  xAxis: { data: ["Jan", "Feb", "Mar", "Apr", "May"] },
  yAxis: {},
  series: [
    {
      name: "Actuals",
      type: "line",
      data: actualYValues,
    },
    {
      name: "Trendline",
      type: "line",
      smooth: true,
      showSymbol: false,
      itemStyle: { opacity: 0},
      lineStyle: { type: "solid", width: 1 },
      data: actualYValues,
      markLine: {
        silent: true,
        data: [[{ type: 'min' }, { type: 'max' }]]
      },
      markPoint: {
        symbolSize: 0,
        label: {show:false},
        data: [
          {name:'last point', type:'max', valueIndex:-1},
          {type:'min'},
        ],
      },
      emphasis:{
        focus:'self',
        lineStyle:{width:2},
        label:{fontWeight: 'bold'}
      }
    }
  ],
};

    myChart.setOption(options);

    return () => {
      myChart.dispose();
    };
  }, [actualYValues]);

  const handleDataChange = (e:any) => {
 
   setInputData({...inputData,[e.target.name]:parseInt(e.target.value)})
   let val =Object.values(inputData)
   console.log(val)
   //@ts-ignore
 setActualYValues(val)
  };

console.log(actualYValues)
  const handleReset = () => {
 setActualYValues(init)
  };


  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
>
    <div className="container">
      <div className="chart-column">
        <div id="chart-container" ref={chartRef} style={{ width: '100%', height: '400px' }} />
      </div>
      <div className="controls-column">
      
      </div>
      <div>
        {["Jan", "Feb", "Mar", "Apr", "May"].map((item, index) => (
          <div key={index}>
            <span>{item}: </span>
            <input
              name={item}
              type="number"
              onChange={(e) => handleDataChange(e)}
              placeholder='Enter data'
              style={{color:"black"}}
            />
          </div>
        ))}
        <button onClick={handleReset}>Reset Chart</button>
      </div>
     
    </div>
    </motion.div>
  );
};

export default ChartComponent;

