import React, { useState, useEffect } from "react";

const vehicles = [
  {
    id: 1,
    category: "RANGE ROVER",
    model: "Range Rover",
    variant: "HSE",
    price: 69500,
    year: 2025,
    engine: "P400 Petrol Mild Hybrid",
    exterior: "Hakuba Silver",
    interior: "Dp Grnt Semi Anl Lthr",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a",
  },
  {
    id: 2,
    category: "RANGE ROVER",
    model: "Range Rover",
    variant: "HSE",
    price: 69500,
    year: 2025,
    engine: "P400 Petrol Mild Hybrid",
    exterior: "Hakuba Silver",
    interior: "Dp Grnt Semi Anl Lthr",
    image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9",
  },
  {
    id: 3,
    category: "RANGE ROVER SPORT",
    model: "Range Rover Sport",
    variant: "HSE",
    price: 62000,
    year: 2024,
    engine: "P400 Petrol Mild Hybrid",
    exterior: "Santorini Black",
    interior: "Dp Grnt Semi Anl Lthr",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
  },
  {
    id: 4,
    category: "DEFENDER",
    model: "Defender 110",
    variant: "X-Dynamic",
    price: 58000,
    year: 2024,
    engine: "D300 Diesel",
    exterior: "Pangea Green",
    interior: "Leather",
    image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9",
  },
];

export default function RangeOver() {
  const [activeCategory, setActiveCategory] = useState("RANGE ROVER");

  const [filters, setFilters] = useState({
    model: [],
    year: [],
    exterior: [],
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // 🔒 Disable scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "auto";
  }, [isDrawerOpen]);

  const handleCategoryClick = (category) => {
  setActiveCategory(category);
  setFilters({ model: [], year: [], exterior: [] });
  setIsDrawerOpen(false);
};


  const toggleFilter = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((v) => v !== value)
        : [...prev[type], value],
    }));
  };

  const filteredVehicles = vehicles.filter((v) => {
  return (
    v.category === activeCategory &&
    (filters.model.length === 0 || filters.model.includes(v.model)) &&
    (filters.year.length === 0 || filters.year.includes(v.year)) &&
    (filters.exterior.length === 0 || filters.exterior.includes(v.exterior))
  );
});


  return (
    <>
      {/* ================= OVERLAY ================= */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[999]"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* ================= LEFT DRAWER ================= */}
      <div
        className={`fixed top-0 left-0 h-screen text-black w-80 bg-white z-[1000] overflow-y-auto overflow-x-hidden
        transform transition-transform duration-300 ease-in-out font-lato
        ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="font-semibold tracking-widest">
            {activeCategory}
          </h2>
          <button
            className="text-xl"
            onClick={() => setIsDrawerOpen(false)}
          >
            ✕
          </button>
        </div>

        <div className="divide-y">
          {[
            "RANGE ROVER",
            "RANGE ROVER SPORT",
            "RANGE ROVER VELAR",
            "RANGE ROVER EVOQUE",
          ].map((item) => (
            <div
              key={item}
              onClick={() => handleCategoryClick(item)}
              className="px-6 py-4 hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </div>
          ))}

          <div className="px-6 py-4 font-semibold">DEFENDER</div>

          {["DEFENDER 90", "DEFENDER 110", "DEFENDER 130"].map((item) => (
            <div
              key={item}
              onClick={() => handleCategoryClick(item)}
              className="px-6 py-4 hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </div>
          ))}
          <div className="px-6 py-4 font-semibold">DISCOVERY</div>

          {["DISCOVERY", "DISCOVERY SPORTS"].map((item) => (
            <div
              key={item}
              onClick={() => handleCategoryClick(item)}
              className="px-6 py-4 hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
        
      </div>

      {/* ================= MAIN PAGE ================= */}
      <div className="min-h-screen bg-white text-black">
        {/* HEADER */}
        <header className="flex justify-between items-center px-12 py-4 border-b shadow-sm">
          <div className="flex gap-8 text-sm font-semibold tracking-wide">
            <button onClick={() => setIsDrawerOpen(true)}>
              NEW VEHICLES
            </button>
            <span>APPROVED USED</span>
          </div>

          <h2 className="font-semibold tracking-widest">
            {activeCategory}
          </h2>


          <div className="flex gap-6 items-center text-sm">
            <span>← EXPLORE RANGE ROVER</span>
            <span>♡</span>
            <span>👤</span>
            <span>AR</span>
          </div>
        </header>

        {/* CONTENT */}
        <div className="grid grid-cols-12 gap-10 px-12 py-10">
          {/* FILTERS */}
          <aside className="col-span-3 space-y-6">
            <h2 className="tracking-widest text-sm font-semibold">
              FILTERS
            </h2>

            <section>
              <h3 className="font-semibold mb-4">MODELS</h3>
              <label className="flex gap-3">
                <input
                  type="checkbox"
                  checked={filters.model.includes("Range Rover")}
                  onChange={() => toggleFilter("model", "Range Rover")}
                />

                Range Rover
              </label>
            </section>

            <section>
              <h3 className="font-semibold mb-4">MODEL YEAR</h3>
              {[2025, 2024].map((year) => (
                <label key={year} className="flex gap-3 mb-2">
                  <input
                    type="checkbox"
                    checked={filters.year.includes(year)}
                    onChange={() => toggleFilter("year", year)}
                  />

                  {year}
                </label>
              ))}
            </section>

            <section>
              <h3 className="font-semibold mb-4">EXTERIOR</h3>
              {["Hakuba Silver", "Santorini Black"].map((color) => (
                <label key={color} className="flex gap-3 mb-2">
                  <input
                    type="checkbox"
                    checked={filters.exterior.includes(color)}
                    onChange={() => toggleFilter("exterior", color)}
                  />

                  {color}
                </label>
              ))}
            </section>

            <button
              onClick={() =>
                setFilters({ model: [], year: [], exterior: [] })
              }
              className="w-full bg-black text-white py-3"
            >
              RESET
            </button>
          </aside>

          {/* VEHICLE LIST */}
          <section className="col-span-9">
            <div className="flex justify-between items-center mb-6">
              <h2 className="tracking-widest text-sm font-semibold">
                {filteredVehicles.length} VEHICLES AVAILABLE
              </h2>

              <select className="border px-4 py-2 text-sm">
                <option>PRICE: HIGH TO LOW</option>
                <option>PRICE: LOW TO HIGH</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {filteredVehicles.map((v) => (
                <div key={v.id} className="shadow-lg">
                  <div className="bg-neutral-100">
                    <img
                      src={v.image}
                      alt={v.model}
                      className="w-full h-60 object-cover"
                    />
                  </div>

                  <div className="p-6 space-y-3">
                    <p className="text-green-700 text-xs tracking-widest">
                      IN STOCK
                    </p>

                    <h3 className="text-lg font-semibold">
                      {v.model}
                    </h3>

                    <p className="text-sm">{v.variant}</p>

                    <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                      <p><b>Engine</b> {v.engine}</p>
                      <p><b>Model Year</b> {v.year}</p>
                      <p><b>Exterior</b> {v.exterior}</p>
                      <p><b>Interior</b> {v.interior}</p>
                    </div>

                    <div className="flex justify-between items-center pt-4">
                      <div>
                        <p className="text-xl font-bold">
                          OMR {v.price.toLocaleString()}
                        </p>
                        <p className="text-xs text-gray-500">
                          Reserve with refundable deposit of OMR 100
                        </p>
                      </div>

                      <button className="bg-black text-white px-6 py-3">
                        VIEW DETAILS
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
