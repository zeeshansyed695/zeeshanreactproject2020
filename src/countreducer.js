

const menufinder = (state,action) =>{
    switch (action){
        case 'saturday':
            return 'sabzi' 
            case 'sunday':
            return 'chana pulao' 
            case 'monday':
            return 'lobia' 
            case 'tuesday':
            return 'daal mash' 
            case 'WEDNESDAY':
            return 'Biryani' 
            case 'thrusday':
            return 'beef karahi' 
        case 'friday':
            return 'sabzi'    }
}
export default menufinder;