import TodaysNugget from "./TodaysNugget";
import Mood from "./Mood";

export default function TodaysNuggetRow(){
    return(
        <div className="bg-blackburn-gray">
            <div className="container px-4">
                <div className="row align-items-centertext-gold">
                    {/*This is the left side*/}
                    <div className="col-12 col-lg-4 text-center text-lg-start">
                        <div className="bg-blackburn-gray text-gold p-4 rounded h-100">
                        <Mood />
                        </div>
                    </div>
                    <div className="col-12 col-lg-8 text-center text-lg-start">
                        <div className="bg-blackburn-gray text-gold p-4 rounded h-100">
                            <TodaysNugget />
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}