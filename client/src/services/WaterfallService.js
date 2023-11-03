import Api from '@/services/Api'

export default {
    index (search){
        return Api().get('waterfalls')
    },
    show (waterfallId){
        return Api().get('waterfall/'+waterfallId)
    },
    post (waterfall){
        return Api().post('waterfall',waterfall)
    },
    put (waterfall){
        return Api().put('waterfall/'+waterfall.id, waterfall)
    },
    delete (waterfall){
        return Api().delete('waterfall/'+waterfall.id, waterfall)
    }
}