import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "../style/Villa.module.css";
import {
  FaSearch,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaStar,
} from "react-icons/fa";

const Villa = () => {
  const navigate = useNavigate();

  // State for filters
  const [priceRange, setPriceRange] = useState("all");
  const [bedrooms, setBedrooms] = useState("all");

  // Mock data for villa properties
  const villas = [
    {
      id: 1,
      title: "Luxury Villa with Pool",
      type: "villa",
      price: 850000,
      location: "Beverly Hills",
      bedrooms: 4,
      bathrooms: 3,
      area: 3200,
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&h=300&fit=crop",
      rating: 4.9,
      featured: true,
    },
    {
      id: 2,
      title: "Garden Villa Estate",
      type: "villa",
      price: 650000,
      location: "Garden District",
      bedrooms: 3,
      bathrooms: 2,
      area: 2200,
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop",
      rating: 4.7,
      featured: false,
    },
    {
      id: 3,
      title: "Modern Beach Villa",
      type: "villa",
      price: 1200000,
      location: "Malibu Beach",
      bedrooms: 5,
      bathrooms: 4,
      area: 4500,
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
      rating: 5.0,
      featured: true,
    },
    {
      id: 4,
      title: "Mountain View Villa",
      type: "villa",
      price: 750000,
      location: "Hollywood Hills",
      bedrooms: 4,
      bathrooms: 3,
      area: 2800,
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
      rating: 4.8,
      featured: true,
    },
    {
      id: 5,
      title: "Contemporary Villa",
      type: "villa",
      price: 950000,
      location: "Bel Air",
      bedrooms: 6,
      bathrooms: 5,
      area: 5200,
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
      rating: 4.9,
      featured: true,
    },
    {
      id: 6,
      title: "Tropical Paradise Villa",
      type: "villa",
      price: 580000,
      location: "Venice Beach",
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
      rating: 4.6,
      featured: false,
    },
  ];

  // Filter villas based on selected criteria
  const filteredVillas = villas.filter((villa) => {
    const bedroomMatch =
      bedrooms === "all" || villa.bedrooms === parseInt(bedrooms);
    const priceMatch =
      priceRange === "all" ||
      (priceRange === "low" && villa.price < 500000) ||
      (priceRange === "medium" &&
        villa.price >= 500000 &&
        villa.price < 1000000) ||
      (priceRange === "high" && villa.price >= 1000000);

    return bedroomMatch && priceMatch;
  });

  // Format price for display
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className={styles.villa}>
      {/* Hero Section */}
      <div className={styles.landing}>
        <h1 className={styles.title}>Luxury Villa Collection</h1>
        <p className={styles.description}>
          Discover exclusive villas in the most prestigious locations
        </p>
      </div>

      {/* Summary Section */}
      <div className={styles.summary}>
        <h1 className={styles["section-title"]}>Premium Villa Collection</h1>
        <p>
          Experience the epitome of luxury living with our exclusive collection
          of premium villas. Each property is meticulously designed and located
          in the most prestigious neighborhoods, offering unparalleled comfort,
          privacy, and sophistication.
        </p>
      </div>

      {/* Filters Section */}
      <div className={styles["filters-section"]}>
        <div className={styles["filters-container"]}>
          <div className={styles["filter-group"]}>
            <label className={styles["filter-label"]}>Price Range</label>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className={styles["filter-select"]}
            >
              <option value="all">All Prices</option>
              <option value="low">Under $500K</option>
              <option value="medium">$500K - $1M</option>
              <option value="high">Over $1M</option>
            </select>
          </div>

          <div className={styles["filter-group"]}>
            <label className={styles["filter-label"]}>Bedrooms</label>
            <select
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className={styles["filter-select"]}
            >
              <option value="all">Any</option>
              <option value="3">3 Bedrooms</option>
              <option value="4">4 Bedrooms</option>
              <option value="5">5 Bedrooms</option>
              <option value="6">6+ Bedrooms</option>
            </select>
          </div>

          <button
            className={styles["btn-17"]}
            onClick={() => {
              setPriceRange("all");
              setBedrooms("all");
            }}
          >
            <span className={styles["text-container"]}>
              <span className={styles["clear-filters"]}>Clear Filters</span>
            </span>
          </button>
        </div>
      </div>

      {/* Villas Grid */}
      <div className={styles["properties-grid"]}>
        {filteredVillas.map((villa) => (
          <div
            key={villa.id}
            className={styles["property-card"]}
            onClick={() => navigate(`/villa/${villa.id}`)}
          >
            <div className={styles["property-image-container"]}>
              <img
                src={villa.image}
                alt={villa.title}
                className={styles["property-image"]}
              />
              <div className={styles["property-overlay"]}>
                <button className={styles["btn-17"]}>
                  <span className={styles["text-container"]}>
                    <span className={styles["text"]}>View Details</span>
                  </span>
                </button>
              </div>
            </div>
            <div className={styles["property-content"]}>
              <h3 className={styles["property-title"]}>{villa.title}</h3>
              <div className={styles["property-location"]}>
                <FaMapMarkerAlt />
                <span>{villa.location}</span>
              </div>
              <div className={styles["property-details"]}>
                <div className={styles["detail-item"]}>
                  <FaBed />
                  <span>{villa.bedrooms} Beds</span>
                </div>
                <div className={styles["detail-item"]}>
                  <FaBath />
                  <span>{villa.bathrooms} Baths</span>
                </div>
                <div className={styles["detail-item"]}>
                  <FaRulerCombined />
                  <span>{villa.area} sq ft</span>
                </div>
              </div>
              <div className={styles["property-footer"]}>
                <div className={styles["property-price"]}>
                  {formatPrice(villa.price)}
                </div>
                <div className={styles["property-rating"]}>
                  <FaStar />
                  <span>{villa.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredVillas.length === 0 && (
        <div className={styles["no-results"]}>
          <h3>No villas found</h3>
          <p>Try adjusting your filters to see more results.</p>
        </div>
      )}
    </div>
  );
};

export default Villa;
