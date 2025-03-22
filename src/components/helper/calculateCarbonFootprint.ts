import emissionFactors from "../graphs/emissio-data";
import { truncateTo3DecimalPlaces } from "./truncate";

function calculateCarbonFootPrint(activityType: string, activityName: string, info: number){
    
    if(activityType === "other"){
        return truncateTo3DecimalPlaces(info as number);
    }
    else {
        const emissionFactor = (emissionFactors.find(obj => obj.activity_type === activityType)
                                ?.activities.find(activity => activity.activity_name === activityName)
                                ?.emission_factor) as number;
        return truncateTo3DecimalPlaces(emissionFactor * info);
    }
}

export { calculateCarbonFootPrint };