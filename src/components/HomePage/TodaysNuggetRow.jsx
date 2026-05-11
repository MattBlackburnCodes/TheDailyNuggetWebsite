import Mood from "./Mood";

export default function TodaysNuggetRow(){
    return(
        <div className="bg-blackburn-gray py-4">
            <div className="container bg-blackburn-gray">
                <div className="row align-items-stretch text-gold">
                    {/*This is the left side*/}
                    <div className="col-12 text-center text-lg-start">
                        <div className="bg-blackburn-gray text-gold p-4 rounded-4 shadow-inset h-100">
                        <Mood />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
