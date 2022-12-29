const {ONE_SIGNAL_CONFIG} = require('../config/config')
const SendNotification = require('../services/push-notification.services')

exports.SendNotification = (req,res,next)=>{
    var message = {
        app_id : ONE_SIGNAL_CONFIG.API_ID,
        contents: {en: "Test notification"},
        included_segments : ["All"],
        content_available : true,
        small_icon : "ic_notification_icon",
        data:{
            PushTitle: "Custom notification"
        }
    }
    SendNotification(message,(error,results)=>{
        if(error){
            return next(error)
        }
        return res.status(200).send({
            message:"Success",
            data:results
        })
    })
}

exports.SendNotificationToDevice = (req,res,next)=>{
    var message = {
        app_id : ONE_SIGNAL_CONFIG.API_ID,
        contents: {en: "Test notification"},
        included_segments : ["include_player_ids"],
        include_player_ids : req.body.devices,
        content_available : true,
        small_icon : "ic_notification_icon",
        data:{
            PushTitle: "Custom notification"
        },
        //delayed_option:"timezone",
        //delivery_time_of_day:"8:52PM"
    }
    SendNotification(message,(error,results)=>{
        if(error){
            return next(error)
        }
        return res.status(200).send({
            message:"Success",
            data:results
        })
    })
}