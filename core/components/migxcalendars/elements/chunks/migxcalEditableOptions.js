   eventResize: function(event, revertFunc) {
        migxcalController.eventResize(event,revertFunc);
    },
    eventDrop: function(event, revertFunc,jsEvent, ui, view) {
        migxcalController.eventDrop(event,revertFunc,jsEvent, ui, view);
    },
    droppable: true,
    drop: function(moment, e ) {
        var event = {
            start : moment,
            category_id : $(e.target).data().id
        }
        migxcalController.eventDropNew(event);   
    },
    eventRender: function(event, element) {
        
        element.popover({
            content: event.popupmenu,
            html: true,
            placement: 'top'
        });
        
        element.on('show.bs.popover',function(){
            $('.popover').css({display:'none'}); 
            $('.fc-event').popover('hide');
        });
        element.on('shown.bs.popover',function(){
            $('.event-button').click(function() {
                var data = $(this).data();
                var action = data.action;
                if (action == 'edit'){
                    migxcalController.eventEdit(data);    
                }
                if (action == 'publish'){
                    migxcalController.eventPublish(data);    
                } 
                if (action == 'unpublish'){
                    migxcalController.eventPublish(data);     
                }                                     
                
            
            });              
        });        
    }   