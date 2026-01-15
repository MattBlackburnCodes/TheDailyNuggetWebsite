export default function Mood() {
    return (
        <div className="container bg-blackburn-gray text-gold">
            <div className="row">
                <div className="col-12 text-center">
                <h6 className="pt-3 mb-3">
                    <span className="bg-blackburn-dark-yellow rounded-pill px-3 py-2 d-inline-block">
                    Mood
                    </span>
                </h6>
                </div>
        </div>

            <div className="row justify-content-start">
                <div className="col-6 col-md-4">
                    <button className="btn btn-outline-gold w-100">💪 Motivate</button>
                </div>
                <div className="col-6 col-md-4">
                    <button className="btn btn-outline-gold w-100">💡 Inspired</button>
                </div>
                <div className="col-6 col-md-4">
                    <button className="btn btn-outline-gold w-100">🤣 Funny</button>
                </div>
                <div className="col-6 col-md-4">
                    <button className="btn btn-outline-gold w-100">🧘 Calm</button>
                </div>
            </div>
        </div>
    );
}