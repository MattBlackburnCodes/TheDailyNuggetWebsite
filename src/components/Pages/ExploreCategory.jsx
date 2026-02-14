import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ExploreCategory() {
  const { categoryKey } = useParams();   // "quotes", "jokes", etc.

  const [items, setItems] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch(`/api/explore/${categoryKey}`);
        const data = await response.json();
        setItems(data);  // assuming API returns an array
      } catch (error) {
        console.error("Error loading category:", error);
      }
    }

    loadData();
  }, [categoryKey]);

  return (
    <div className="bg-blackburn-gray min-vh-100">
      <div className="container pt-4 pb-5 text-gold">
        
        {/* Header */}
        <h2 className="mb-4 text-capitalize">
          {categoryKey}
        </h2>

        {/* Grid */}
        <div className="row gy-3">
          {items.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-xl-4">
              <div className="p-3 shadow-inset rounded-4">
                <p className="text-white mb-2">{item.text}</p>
                {item.author && (
                  <small className="text-gold">— {item.author}</small>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}