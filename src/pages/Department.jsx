import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "../style/Department.module.css";
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

const Department = () => {
  const navigate = useNavigate();

  // State for filters
  const [priceRange, setPriceRange] = useState("all");
  const [bedrooms, setBedrooms] = useState("all");

  // Mock data for properties
  const properties = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      type: "apartment",
      price: 250000,
      location: "Downtown District",
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
      rating: 4.8,
      featured: true,
    },
    {
      id: 2,
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
      id: 3,
      title: "Cozy Family House",
      type: "house",
      price: 450000,
      location: "Suburban Area",
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
      rating: 4.6,
      featured: false,
    },
    {
      id: 4,
      title: "Studio Apartment",
      type: "apartment",
      price: 180000,
      location: "City Center",
      bedrooms: 1,
      bathrooms: 1,
      area: 650,
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
      rating: 4.4,
      featured: false,
    },
    {
      id: 5,
      title: "Penthouse Suite",
      type: "apartment",
      price: 1200000,
      location: "Luxury Tower",
      bedrooms: 3,
      bathrooms: 3,
      area: 2800,
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
      rating: 5.0,
      featured: true,
    },
    {
      id: 6,
      title: "Garden Villa",
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
  ];

  // Filter properties based on selected criteria
  const filteredProperties = properties.filter((property) => {
    const bedroomMatch =
      bedrooms === "all" || property.bedrooms === parseInt(bedrooms);
    const priceMatch =
      priceRange === "all" ||
      (priceRange === "low" && property.price < 300000) ||
      (priceRange === "medium" &&
        property.price >= 300000 &&
        property.price < 600000) ||
      (priceRange === "high" && property.price >= 600000);

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
    <div className={styles.department}>
      {/* Hero Section */}
      <div className={styles.landing}>
        <h1>Discover Your Perfect Apartments</h1>
        <p>Explore our curated collection of premium real estate</p>
      </div>

      {/* Summary Section */}
      <div className={styles.summary}>
        <h1 className={styles["section-title"]}>
          Premium Properties Collection
        </h1>
        <p>
          We offer an exclusive selection of the finest properties in prime
          locations. Each property is carefully selected to meet the highest
          standards of luxury, comfort, and investment potential. Our expert
          team ensures every detail meets your expectations.
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
              <option value="low">Under $300K</option>
              <option value="medium">$300K - $600K</option>
              <option value="high">Over $600K</option>
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
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4">4+ Bedrooms</option>
            </select>
          </div>

          <button className={styles["btn-17"]}>
            <span className={styles["text-container"]}>
              <span className={styles["clear-filters"]}>
                <div className={styles.text}>Clear Filters</div>
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* Properties Grid */}
      <div className={styles["properties-grid"]}>
        {filteredProperties.map((property) => (
          <div
            key={property.id}
            className={styles["property-card"]}
            onClick={() => navigate(`/department/${property.id}`)}
          >
            <div className={styles["property-image-container"]}>
              <img
                src={property.image}
                alt={property.title}
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
              <h3 className={styles["property-title"]}>{property.title}</h3>
              <div className={styles["property-location"]}>
                <FaMapMarkerAlt />
                <span>{property.location}</span>
              </div>
              <div className={styles["property-details"]}>
                <div className={styles["detail-item"]}>
                  <FaBed />
                  <span>{property.bedrooms} Beds</span>
                </div>
                <div className={styles["detail-item"]}>
                  <FaBath />
                  <span>{property.bathrooms} Baths</span>
                </div>
                <div className={styles["detail-item"]}>
                  <FaRulerCombined />
                  <span>{property.area} sq ft</span>
                </div>
              </div>
              <div className={styles["property-footer"]}>
                <div className={styles["property-price"]}>
                  {formatPrice(property.price)}
                </div>
                <div className={styles["property-rating"]}>
                  <FaStar />
                  <span>{property.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProperties.length === 0 && (
        <div className={styles["no-results"]}>
          <h3>No properties found</h3>
          <p>Try adjusting your filters to see more results.</p>
        </div>
      )}
    </div>
  );
};

export default Department;
