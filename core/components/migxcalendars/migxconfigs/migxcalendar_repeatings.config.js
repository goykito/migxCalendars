{
  "id":159,
  "name":"migxcalendar_repeatings",
  "formtabs":"",
  "contextmenus":"remove",
  "actionbuttons":"",
  "columnbuttons":"",
  "filters":"[]",
  "extended":{
    "migx_add":"",
    "formcaption":"",
    "update_win_title":"",
    "win_id":"migxcalendar_children",
    "maxRecords":"",
    "addNewItemAt":"bottom",
    "multiple_formtabs":"",
    "extrahandlers":"this.publishObject||this.unpublishObject",
    "packageName":"migxcalendars",
    "classname":"migxCalendarDates",
    "task":"",
    "getlistsort":"startdate",
    "getlistsortdir":"",
    "use_custom_prefix":"0",
    "prefix":"",
    "grid":"",
    "gridload_mode":1,
    "check_resid":1,
    "check_resid_TV":"",
    "join_alias":"Event",
    "has_jointable":"no",
    "getlistwhere":{
      "type":"repeating"
    },
    "joins":"",
    "cmpmaincaption":"Events Manager",
    "cmptabcaption":"Events",
    "cmptabdescription":"Manage Events",
    "cmptabcontroller":"",
    "winbuttons":"",
    "onsubmitsuccess":"",
    "submitparams":""
  },
  "columns":[
    {
      "MIGX_id":1,
      "header":"ID",
      "dataIndex":"id",
      "width":10,
      "sortable":true,
      "show_in_grid":"0",
      "renderer":"",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"[]"
    },
    {
      "MIGX_id":3,
      "header":"[[%migxcal.start]]",
      "dataIndex":"startdate",
      "width":20,
      "sortable":true,
      "show_in_grid":1,
      "renderer":"this.renderDate",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"[]"
    },
    {
      "MIGX_id":5,
      "header":"[[%migxcal.end]]",
      "dataIndex":"enddate",
      "width":20,
      "sortable":true,
      "show_in_grid":1,
      "renderer":"this.renderDate",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"[]"
    },
    {
      "MIGX_id":6,
      "header":"[[%migxcal.active]]",
      "dataIndex":"published",
      "width":10,
      "sortable":"false",
      "show_in_grid":1,
      "renderer":"this.renderClickCrossTick",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"[]"
    }
  ],
  "createdby":1,
  "createdon":"2014-02-16 18:59:01",
  "editedby":1,
  "editedon":"2014-02-27 07:25:56",
  "deleted":0,
  "deletedon":"-1-11-30 00:00:00",
  "deletedby":0,
  "published":1,
  "publishedon":"2014-02-16 01:00:00",
  "publishedby":0
}