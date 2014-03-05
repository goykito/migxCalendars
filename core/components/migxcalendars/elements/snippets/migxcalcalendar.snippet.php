$lang = $modx->getOption('lang',$scriptProperties,$modx->getOption('cultureKey'));
$editable = $modx->getOption('editable',$scriptProperties,'false');
$ajax_id = $modx->getOption('ajax_id',$scriptProperties,$modx->getOption('migxcalendar.ajax_id'));
$ajax_url = $modx->makeUrl($ajax_id);

$params = $_REQUEST;

$categories = $modx->getOption('categories',$params,'');
$date = $modx->getOption('date',$params,'');

if (!empty($date)){
    $defaultDate = "defaultDate : '". $date ."',";
}

$script = "
<script>

	$(document).ready(function() {
	    var migxcal_categories = {};
        
		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			{$defaultDate}
			lang: '{$lang}',
            editable: {$editable},
			events: {
				url: '{$ajax_url}',
                data: function() {
                    return {categories:migxcal_categories};
                },                
				error: function() {
					$('#script-warning').show();
				}
			},
			loading: function(bool) {
				$('#loading').toggle(bool);
			}
		});
        $('.migxcal_category').click(function(){
            var el = $(this);
            var id = el.data().id;
            el.toggleClass('selected');
            if (el.hasClass('selected')){
                migxcal_categories['c_' + id] = id; 
            }
            else{
                migxcal_categories['c_' + id] = 0; 
            }
            $('#calendar').fullCalendar( 'refetchEvents' );
        });
		
	});

</script>
";

$modx->regClientCSS('assets/components/migxcalendars/js/fullcalendar/fullcalendar.css');
$modx->regClientCSS('assets/components/migxcalendars/css/style.css');
$modx->regClientStartupHTMLBlock('<link type="text/css" href="assets/components/migxcalendars/js/fullcalendar/fullcalendar.print.css" rel="stylesheet" media="print">');
$modx->regClientScript('assets/components/migxcalendars/js/lib/moment.min.js');
$modx->regClientScript('assets/components/migxcalendars/js/lib/jquery.min.js');
$modx->regClientScript('assets/components/migxcalendars/js/lib/jquery-ui.custom.min.js');
$modx->regClientScript('assets/components/migxcalendars/js/fullcalendar/fullcalendar.min.js');
$modx->regClientScript('assets/components/migxcalendars/js/fullcalendar/lang/de.js');
$modx->regClientScript('');
$modx->regClientHTMLBlock($script);