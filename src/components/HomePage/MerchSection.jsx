export default function MerchSection() {
    return (
        <div className="bg-blackburn-black py-4">
            <div className="container bg-blackburn-black">
                <div className="container-fluid pt-3 p-5 bg-blackburn-black text-gold shadow-inset rounded-4">
                    <div className="row">
                        <div className="col-12 text-left">
                            <h6 className="pt-3 mb-3">
                                <span className="bg-blackburn-dark-yellow rounded-pill px-3 py-2 d-inline-block">
                                Merch
                                </span>
                            </h6>
                        </div>
                    </div>
                    <div>
                        <h6 className="">Nugget Merch is Cooking</h6>
                    </div>
                    <div>
                        <p className="">Coming Soon - Stickers, Mugs, and more</p>
                    </div>

                    <div className="row justify-content-start">
                        <div className="col-6 col-md-4">
                            <button className="btn btn-blackburn-gold w-10">View Merch</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}