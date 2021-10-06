import React, { useState, useEffect } from 'react';
import TrainingMatrix from '../../trainingmatrix/TrainingMatrix'

export const TrainingMatrixPage = (props) => {
  const [textMessage, setTextMessage] = useState('');
  const [showLegend, setShowLegend] = useState(false);
  const [skillsData, setSkillsData] = useState(null);
  const [operatorsData, setOperatorsData] = useState(null);
  const [certificationsData, setCertificationsData] = useState(null);

  // var certificationsDatax = [
  // {
  //   "id": "1","operatorID": "1","skillID": "1",
  //   "meta": {"status":"started","start":"8/3/2021","trainer":false},
  //   "data": [{"p":25,"s":1},{"p":50,"s":1},{"p":75,"s":1},{"p":100,"s":0}]
  // },
  // {
  //   "id": "2","operatorID": "2","skillID": "1",
  //   "meta": {"status":"started","start":"8/3/2021","trainer":false},
  //   "data": [{"p":25,"s":1},{"p":50,"s":1},{"p":75,"s":1},{"p":100,"s":0}]
  // },
  //]

  // var certificationsData2 = [
  //   {
  //     "id": "1","operatorID": "1","skillID": "1",

  //     "meta": "{\"status\":\"started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":1},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",


  //   },
  //   {
  //     "id": "10",
  //     "operatorID": "1",
  //     "skillID": "2",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.647Z",
  //     "updatedAt": "2021-08-03T11:00:43.647Z"
  //   },
  //   {
  //     "id": "11",
  //     "operatorID": "2",
  //     "skillID": "2",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.647Z",
  //     "updatedAt": "2021-08-03T11:00:43.647Z"
  //   },
  //   {
  //     "id": "12",
  //     "operatorID": "3",
  //     "skillID": "2",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.586Z",
  //     "updatedAt": "2021-08-03T11:00:43.586Z"
  //   },
  //   {
  //     "id": "13",
  //     "operatorID": "4",
  //     "skillID": "2",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.570Z",
  //     "updatedAt": "2021-08-03T11:00:43.570Z"
  //   },
  //   {
  //     "id": "14",
  //     "operatorID": "5",
  //     "skillID": "2",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.622Z",
  //     "updatedAt": "2021-08-03T11:00:43.622Z"
  //   },
  //   {
  //     "id": "15",
  //     "operatorID": "6",
  //     "skillID": "2",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.648Z",
  //     "updatedAt": "2021-08-03T11:00:43.648Z"
  //   },
  //   {
  //     "id": "16",
  //     "operatorID": "7",
  //     "skillID": "2",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.655Z",
  //     "updatedAt": "2021-08-03T11:00:43.655Z"
  //   },
  //   {
  //     "id": "17",
  //     "operatorID": "8",
  //     "skillID": "2",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.650Z",
  //     "updatedAt": "2021-08-03T11:00:43.650Z"
  //   },
  //   {
  //     "id": "18",
  //     "operatorID": "9",
  //     "skillID": "2",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.631Z",
  //     "updatedAt": "2021-08-03T11:00:43.631Z"
  //   },
  //   {
  //     "id": "19",
  //     "operatorID": "1",
  //     "skillID": "3",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.638Z",
  //     "updatedAt": "2021-08-03T11:00:43.638Z"
  //   },
  //   {
  //     "id": "2",
  //     "operatorID": "2",
  //     "skillID": "1",
  //     "meta": "{\"status\":\"started\",\"start\":\"8/3/2021\",\"trainer\":false}",
  //     "data": "[{\"p\":25,\"s\":1},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.580Z",
  //     "updatedAt": "2021-08-11T13:01:55.598Z"
  //   },
  //   {
  //     "id": "20",
  //     "operatorID": "2",
  //     "skillID": "3",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.646Z",
  //     "updatedAt": "2021-08-03T11:00:43.646Z"
  //   },
  //   {
  //     "id": "21",
  //     "operatorID": "3",
  //     "skillID": "3",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.637Z",
  //     "updatedAt": "2021-08-03T11:00:43.637Z"
  //   },
  //   {
  //     "id": "22",
  //     "operatorID": "4",
  //     "skillID": "3",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.623Z",
  //     "updatedAt": "2021-08-03T11:00:43.623Z"
  //   },
  //   {
  //     "id": "23",
  //     "operatorID": "5",
  //     "skillID": "3",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.637Z",
  //     "updatedAt": "2021-08-03T11:00:43.637Z"
  //   },
  //   {
  //     "id": "24",
  //     "operatorID": "6",
  //     "skillID": "3",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.656Z",
  //     "updatedAt": "2021-08-03T11:00:43.656Z"
  //   },
  //   {
  //     "id": "25",
  //     "operatorID": "7",
  //     "skillID": "3",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.634Z",
  //     "updatedAt": "2021-08-03T11:00:43.634Z"
  //   },
  //   {
  //     "id": "26",
  //     "operatorID": "8",
  //     "skillID": "3",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.641Z",
  //     "updatedAt": "2021-08-03T11:00:43.641Z"
  //   },
  //   {
  //     "id": "27",
  //     "operatorID": "9",
  //     "skillID": "3",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.648Z",
  //     "updatedAt": "2021-08-03T11:00:43.648Z"
  //   },
  //   {
  //     "id": "28",
  //     "operatorID": "1",
  //     "skillID": "4",
  //     "meta": "{\"status\":\"started\",\"start\":\"8/3/2021\",\"trainer\":false}",
  //     "data": "[{\"p\":25,\"s\":1},{\"p\":50,\"s\":1},{\"p\":75,\"s\":1},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.650Z",
  //     "updatedAt": "2021-10-01T12:27:16.050Z"
  //   },
  //   {
  //     "id": "29",
  //     "operatorID": "2",
  //     "skillID": "4",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.647Z",
  //     "updatedAt": "2021-08-03T11:00:43.647Z"
  //   },
  //   {
  //     "id": "3",
  //     "operatorID": "3",
  //     "skillID": "1",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.592Z",
  //     "updatedAt": "2021-08-03T11:00:43.592Z"
  //   },
  //   {
  //     "id": "30",
  //     "operatorID": "3",
  //     "skillID": "4",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.647Z",
  //     "updatedAt": "2021-08-03T11:00:43.647Z"
  //   },
  //   {
  //     "id": "31",
  //     "operatorID": "4",
  //     "skillID": "4",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.652Z",
  //     "updatedAt": "2021-08-03T11:00:43.652Z"
  //   },
  //   {
  //     "id": "32",
  //     "operatorID": "5",
  //     "skillID": "4",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.653Z",
  //     "updatedAt": "2021-08-03T11:00:43.653Z"
  //   },
  //   {
  //     "id": "33",
  //     "operatorID": "6",
  //     "skillID": "4",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.680Z",
  //     "updatedAt": "2021-08-03T11:00:43.680Z"
  //   },
  //   {
  //     "id": "34",
  //     "operatorID": "7",
  //     "skillID": "4",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.625Z",
  //     "updatedAt": "2021-08-03T11:00:43.625Z"
  //   },
  //   {
  //     "id": "35",
  //     "operatorID": "8",
  //     "skillID": "4",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.684Z",
  //     "updatedAt": "2021-08-03T11:00:43.684Z"
  //   },
  //   {
  //     "id": "36",
  //     "operatorID": "9",
  //     "skillID": "4",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.650Z",
  //     "updatedAt": "2021-08-03T11:00:43.650Z"
  //   },
  //   {
  //     "id": "37",
  //     "operatorID": "1",
  //     "skillID": "5",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.637Z",
  //     "updatedAt": "2021-08-03T11:00:43.637Z"
  //   },
  //   {
  //     "id": "38",
  //     "operatorID": "2",
  //     "skillID": "5",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.664Z",
  //     "updatedAt": "2021-08-03T11:00:43.664Z"
  //   },
  //   {
  //     "id": "39",
  //     "operatorID": "3",
  //     "skillID": "5",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.687Z",
  //     "updatedAt": "2021-08-03T11:00:43.687Z"
  //   },
  //   {
  //     "id": "4",
  //     "operatorID": "4",
  //     "skillID": "1",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.577Z",
  //     "updatedAt": "2021-08-03T11:00:43.577Z"
  //   },
  //   {
  //     "id": "40",
  //     "operatorID": "4",
  //     "skillID": "5",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.658Z",
  //     "updatedAt": "2021-08-03T11:00:43.658Z"
  //   },
  //   {
  //     "id": "41",
  //     "operatorID": "5",
  //     "skillID": "5",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.661Z",
  //     "updatedAt": "2021-08-03T11:00:43.661Z"
  //   },
  //   {
  //     "id": "42",
  //     "operatorID": "6",
  //     "skillID": "5",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.662Z",
  //     "updatedAt": "2021-08-03T11:00:43.662Z"
  //   },
  //   {
  //     "id": "43",
  //     "operatorID": "7",
  //     "skillID": "5",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.641Z",
  //     "updatedAt": "2021-08-03T11:00:43.641Z"
  //   },
  //   {
  //     "id": "44",
  //     "operatorID": "8",
  //     "skillID": "5",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.655Z",
  //     "updatedAt": "2021-08-03T11:00:43.655Z"
  //   },
  //   {
  //     "id": "45",
  //     "operatorID": "9",
  //     "skillID": "5",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.673Z",
  //     "updatedAt": "2021-08-03T11:00:43.673Z"
  //   },
  //   {
  //     "id": "46",
  //     "operatorID": "1",
  //     "skillID": "6",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.630Z",
  //     "updatedAt": "2021-08-03T11:00:43.630Z"
  //   },
  //   {
  //     "id": "47",
  //     "operatorID": "2",
  //     "skillID": "6",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.663Z",
  //     "updatedAt": "2021-08-03T11:00:43.663Z"
  //   },
  //   {
  //     "id": "48",
  //     "operatorID": "3",
  //     "skillID": "6",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.690Z",
  //     "updatedAt": "2021-08-03T11:00:43.690Z"
  //   },
  //   {
  //     "id": "49",
  //     "operatorID": "4",
  //     "skillID": "6",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.662Z",
  //     "updatedAt": "2021-08-03T11:00:43.662Z"
  //   },
  //   {
  //     "id": "5",
  //     "operatorID": "5",
  //     "skillID": "1",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.552Z",
  //     "updatedAt": "2021-08-03T11:00:43.552Z"
  //   },
  //   {
  //     "id": "50",
  //     "operatorID": "5",
  //     "skillID": "6",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.646Z",
  //     "updatedAt": "2021-08-03T11:00:43.646Z"
  //   },
  //   {
  //     "id": "51",
  //     "operatorID": "6",
  //     "skillID": "6",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.666Z",
  //     "updatedAt": "2021-08-03T11:00:43.666Z"
  //   },
  //   {
  //     "id": "52",
  //     "operatorID": "7",
  //     "skillID": "6",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.667Z",
  //     "updatedAt": "2021-08-03T11:00:43.667Z"
  //   },
  //   {
  //     "id": "53",
  //     "operatorID": "8",
  //     "skillID": "6",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.694Z",
  //     "updatedAt": "2021-08-03T11:00:43.694Z"
  //   },
  //   {
  //     "id": "54",
  //     "operatorID": "9",
  //     "skillID": "6",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.674Z",
  //     "updatedAt": "2021-08-03T11:00:43.674Z"
  //   },
  //   {
  //     "id": "55",
  //     "operatorID": "1",
  //     "skillID": "7",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.682Z",
  //     "updatedAt": "2021-08-03T11:00:43.682Z"
  //   },
  //   {
  //     "id": "56",
  //     "operatorID": "2",
  //     "skillID": "7",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.673Z",
  //     "updatedAt": "2021-08-03T11:00:43.673Z"
  //   },
  //   {
  //     "id": "57",
  //     "operatorID": "3",
  //     "skillID": "7",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.691Z",
  //     "updatedAt": "2021-08-03T11:00:43.691Z"
  //   },
  //   {
  //     "id": "58",
  //     "operatorID": "4",
  //     "skillID": "7",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.703Z",
  //     "updatedAt": "2021-08-03T11:00:43.703Z"
  //   },
  //   {
  //     "id": "59",
  //     "operatorID": "5",
  //     "skillID": "7",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.681Z",
  //     "updatedAt": "2021-08-03T11:00:43.681Z"
  //   },
  //   {
  //     "id": "6",
  //     "operatorID": "6",
  //     "skillID": "1",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.570Z",
  //     "updatedAt": "2021-08-03T11:00:43.570Z"
  //   },
  //   {
  //     "id": "60",
  //     "operatorID": "6",
  //     "skillID": "7",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.708Z",
  //     "updatedAt": "2021-08-03T11:00:43.708Z"
  //   },
  //   {
  //     "id": "61",
  //     "operatorID": "7",
  //     "skillID": "7",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.706Z",
  //     "updatedAt": "2021-08-03T11:00:43.706Z"
  //   },
  //   {
  //     "id": "62",
  //     "operatorID": "8",
  //     "skillID": "7",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.667Z",
  //     "updatedAt": "2021-08-03T11:00:43.667Z"
  //   },
  //   {
  //     "id": "63",
  //     "operatorID": "9",
  //     "skillID": "7",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.692Z",
  //     "updatedAt": "2021-08-03T11:00:43.692Z"
  //   },
  //   {
  //     "id": "64",
  //     "operatorID": "1",
  //     "skillID": "8",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.688Z",
  //     "updatedAt": "2021-08-03T11:00:43.688Z"
  //   },
  //   {
  //     "id": "65",
  //     "operatorID": "2",
  //     "skillID": "8",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.686Z",
  //     "updatedAt": "2021-08-03T11:00:43.686Z"
  //   },
  //   {
  //     "id": "66",
  //     "operatorID": "3",
  //     "skillID": "8",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.710Z",
  //     "updatedAt": "2021-08-03T11:00:43.710Z"
  //   },
  //   {
  //     "id": "67",
  //     "operatorID": "4",
  //     "skillID": "8",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.708Z",
  //     "updatedAt": "2021-08-03T11:00:43.708Z"
  //   },
  //   {
  //     "id": "68",
  //     "operatorID": "5",
  //     "skillID": "8",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.716Z",
  //     "updatedAt": "2021-08-03T11:00:43.716Z"
  //   },
  //   {
  //     "id": "69",
  //     "operatorID": "6",
  //     "skillID": "8",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.697Z",
  //     "updatedAt": "2021-08-03T11:00:43.697Z"
  //   },
  //   {
  //     "id": "7",
  //     "operatorID": "7",
  //     "skillID": "1",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.630Z",
  //     "updatedAt": "2021-08-03T11:00:43.630Z"
  //   },
  //   {
  //     "id": "70",
  //     "operatorID": "7",
  //     "skillID": "8",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.677Z",
  //     "updatedAt": "2021-08-03T11:00:43.677Z"
  //   },
  //   {
  //     "id": "71",
  //     "operatorID": "8",
  //     "skillID": "8",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.699Z",
  //     "updatedAt": "2021-08-03T11:00:43.699Z"
  //   },
  //   {
  //     "id": "72",
  //     "operatorID": "9",
  //     "skillID": "8",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.692Z",
  //     "updatedAt": "2021-08-03T11:00:43.692Z"
  //   },
  //   {
  //     "id": "73",
  //     "operatorID": "1",
  //     "skillID": "9",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.719Z",
  //     "updatedAt": "2021-08-03T11:00:43.719Z"
  //   },
  //   {
  //     "id": "74",
  //     "operatorID": "2",
  //     "skillID": "9",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.704Z",
  //     "updatedAt": "2021-08-03T11:00:43.704Z"
  //   },
  //   {
  //     "id": "75",
  //     "operatorID": "3",
  //     "skillID": "9",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.703Z",
  //     "updatedAt": "2021-08-03T11:00:43.703Z"
  //   },
  //   {
  //     "id": "76",
  //     "operatorID": "4",
  //     "skillID": "9",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.704Z",
  //     "updatedAt": "2021-08-03T11:00:43.704Z"
  //   },
  //   {
  //     "id": "77",
  //     "operatorID": "5",
  //     "skillID": "9",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.687Z",
  //     "updatedAt": "2021-08-03T11:00:43.687Z"
  //   },
  //   {
  //     "id": "78",
  //     "operatorID": "6",
  //     "skillID": "9",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.690Z",
  //     "updatedAt": "2021-08-03T11:00:43.690Z"
  //   },
  //   {
  //     "id": "79",
  //     "operatorID": "7",
  //     "skillID": "9",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.688Z",
  //     "updatedAt": "2021-08-03T11:00:43.688Z"
  //   },
  //   {
  //     "id": "8",
  //     "operatorID": "8",
  //     "skillID": "1",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.615Z",
  //     "updatedAt": "2021-08-03T11:00:43.615Z"
  //   },
  //   {
  //     "id": "80",
  //     "operatorID": "8",
  //     "skillID": "9",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.693Z",
  //     "updatedAt": "2021-08-03T11:00:43.693Z"
  //   },
  //   {
  //     "id": "81",
  //     "operatorID": "9",
  //     "skillID": "9",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.692Z",
  //     "updatedAt": "2021-08-03T11:00:43.692Z"
  //   },
  //   {
  //     "id": "9",
  //     "operatorID": "9",
  //     "skillID": "1",
  //     "meta": "{\"status\":\"not started\",\"start\":\"8/3/2021\",\"trainer\":\"false\"}",
  //     "data": "[{\"p\":25,\"s\":0},{\"p\":50,\"s\":0},{\"p\":75,\"s\":0},{\"p\":100,\"s\":0}]",
  //     "createdAt": "2021-08-03T11:00:43.661Z",
  //     "updatedAt": "2021-08-03T11:00:43.661Z"
  //   }
  // ]
  var xcertificationsData = [
    {
      "id": "1","operatorID": "1","skillID": "1",
      "meta": {"status":"started","start":"8/3/2021","trainer":false},
      "data": [{"p":25,"s":1},{"p":50,"s":1},{"p":75,"s":0},{"p":100,"s":0}]
    },
    {
      "id": "2","operatorID": "2","skillID": "1",
      "meta": {"status":"started","start":"8/3/2021","trainer":false},
      "data": [{"p":25,"s":1},{"p":50,"s":1},{"p":75,"s":1},{"p":100,"s":0}]
    },
    {
      "id": "3","operatorID": "2","skillID": "1",
      "meta": {"status":"started","start":"8/3/2021","trainer":false},
      "data": [{"p":25,"s":1},{"p":50,"s":1},{"p":75,"s":1},{"p":100,"s":0}]
    },
  ]

  useEffect(() => {

    var skillsDataA = [
      {"id": "1","skillName": "Core2 Loading","goal": 8,},
      {"id": "2","skillName": "Phase Paper Insertion (VW)","goal": 2,},
      {"id": "3","skillName": "Lead Wire Setting","goal": 8,},
      {"id": "4","skillName": "Neutral Tube Insertion","goal": 3,},
      {"id": "5","skillName": "Neutral Crimp","goal": 7,},
      {"id": "6","skillName": "Pre-Lacing","goal": 4,},
      {"id": "7","skillName": "Lacing","goal": 5,},
      {"id": "8","skillName": "Lead Terminal Crimp","goal": 6,},
      {"id": "9","skillName": "Lead Wire Forming","goal": 1,}
    ]
    var operatorsDataA = [
      {"id": "1","operatorName": "Aaron Cariaga","picture": "Aaron Cariaga.JPG","goal": 7,},
      {"id": "2","operatorName": "Ahmed Al Talabani","picture": "Ahmed Al Talabani.JPG","goal": 7,},
      {"id": "3","operatorName": "Baltazar Garcia","picture": "Baltazar Garcia.JPG","goal": 7,},
      {"id": "4","operatorName": "Blaise Chancellor Podehole","picture": "Blaise Chancellor Podehale.JPG","goal": 7,},
      {"id": "5","operatorName": "Brian Phetnavong","picture": "Brian Phetnavong.JPG","goal": 7,},
      {"id": "6","operatorName": "Christopher Corvera","picture": "Christopher Corvera.JPG","goal": 7,},
      {"id": "7","operatorName": "Patricia Wandemberg","picture": "Patricia Wandemberg.JPG","goal": 7,},
      {"id": "8","operatorName": "Evanson Kirathe","picture": "Evanson Kirathe.JPG","goal": 7,},
      {"id": "9","operatorName": "Jawwad Mushtaq","picture": "Jawwad Mushtaq.JPG","goal": 7,},
      {"id": "10","operatorName": "Jesus Gonzalez","picture": "Jesus Gonzalez.JPG","goal": 7,},
      {"id": "11","operatorName": "Linda Davila","picture": "Linda Davila.JPG","goal": 7,},
      {"id": "12","operatorName": "Maria Flores","picture": "Maria Flores.JPG","goal": 7,},
      {"id": "13","operatorName": "Maribel Briggs","picture": "Maribel Briggs.JPG","goal": 7,},
      {"id": "14","operatorName": "Osvaldo Cabrera","picture": "Osvaldo Cabrera.JPG","goal": 7,},
      {"id": "15","operatorName": "Richard Genova","picture": "Richard Genova.JPG","goal": 7,},
      {"id": "16","operatorName": "Roger Rivas","picture": "Roger Rivas.JPG","goal": 7,},
      {"id": "17","operatorName": "Sheny Alecio","picture": "Sheny Alecio.JPG","goal": 7,},
      {"id": "18","operatorName": "Trung Nguyen","picture": "Trung Nguyen.JPG","goal": 7,},
      {"id": "19","operatorName": "Shakira Shakir","picture": "Shakira Shakir.JPG","goal": 7,},
      {"id": "20","operatorName": "Jeremy Washington","picture": "Jeremy Washington.JPG","goal": 7,},
    ]
    //https://www.compart.com/en/unicode/block/
    var certificationsDataA = [
      {"operatorID": "1","skillID": "1","meta": {"type":"solid","color":"green","strokecolor":"black","letter":"","start":"8/3/2021",},"data": []},
      {"operatorID": "2","skillID": "1","meta": {"type":"solid","color":"gold","strokecolor":"black","letter":"","start":"8/3/2021",},"data": []},
      {"operatorID": "3","skillID": "1","meta": {"type":"solid","color":"red","strokecolor":"black","letter":"","start":"8/3/2021",},"data": []},
      {"operatorID": "4","skillID": "1","meta": {"type":"solid","color":"goldenrod","strokecolor":"black","letter":"C","start":"8/3/2021",},"data": []},
      {"operatorID": "5","skillID": "1","meta": {"type":"solid","color":"blue","strokecolor":"black","letter":"T","start":"8/3/2021",},"data": []},

      {"operatorID": "5","skillID": "5","meta": {"type":"solid","color":"green","strokecolor":"black","letter":"","start":"8/3/2021",},"data": []},
      {"operatorID": "5","skillID": "6","meta": {"type":"solid","color":"white","strokecolor":"black","letter":"\uD83D\uDC04","start":"8/3/2021",},"data": []},
      {"operatorID": "5","skillID": "7","meta": {"type":"solid","color":"white","strokecolor":"white","letter":"\uD83C\uDF45","start":"8/3/2021",},"data": []},
      {"operatorID": "5","skillID": "9","meta": {"type":"solid","color":"white","strokecolor":"green","letter":"\uD83D\uDD14","start":"8/3/2021",},"data": []},
      {"operatorID": "19","skillID": "9","meta": {"type":"solid","color":"white","strokecolor":"green","letter":"\uD83D\uDD14","start":"8/3/2021",},"data": []},
    ]

    setSkillsData(skillsDataA)
    setOperatorsData(operatorsDataA)
    setCertificationsData(certificationsDataA)
  },[])

  const cellClicked = (id) => {
    setTextMessage(textMessage + '\ncellClicked: ' + id)
  }

  return (
    <div>
      <div style={{padding:'20px'}}>
        <button onClick={()=>{setCertificationsData(xcertificationsData)}}>click</button>
        <button onClick={()=>{setShowLegend(!showLegend)}}>Legend</button>

        <input
          type="text"
          value={textMessage}
          onChange={()=>{}}
        />

        <textarea name="body"
          value={textMessage}
          onChange={()=>{}}
        />

      </div>
      {certificationsData !== null &&
      <TrainingMatrix
        showLegend={showLegend}
        operatorsData={operatorsData}
        skillsData={skillsData}
        certificationsData={certificationsData}
        cellClicked={cellClicked}
      />
      }
    </div>
  )
}