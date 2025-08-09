import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import styles from "../style/Detailsdepartment.module.css";

import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaStar,
  FaWifi,
  FaParking,
  FaSwimmingPool,
  FaDumbbell,
  FaUtensils,
  FaShieldAlt,
  FaCalendarAlt,
  FaUser,
  FaHeart,
  FaShare,
  FaArrowLeft,
  FaShoppingCart,
} from "react-icons/fa";

const Detailsdepartment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock data for the specific property
  const property = {
    id: parseInt(id),
    title: "Modern Downtown Apartment",
    type: "apartment",
    price: 250000,
    location: "Downtown District",
    address: "123 Main Street, Downtown, City",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    yearBuilt: 2020,
    floor: 15,
    parking: 1,
    rating: 4.8,
    reviews: 127,
    featured: true,
    description:
      "This stunning modern apartment offers the perfect blend of luxury and comfort. Located in the heart of downtown, this property features high-end finishes, smart home technology, and breathtaking city views. The open-concept design creates a spacious feel, while the premium appliances and fixtures add a touch of elegance to everyday living.",
    longDescription:
      "Step into luxury with this meticulously designed 2-bedroom, 2-bathroom apartment that redefines urban living. The property boasts floor-to-ceiling windows that flood the space with natural light and offer spectacular city skyline views. The gourmet kitchen features quartz countertops, stainless steel appliances, and a breakfast bar perfect for casual dining. The master suite includes a walk-in closet and an en-suite bathroom with dual vanities and a rainfall shower. Additional features include in-unit laundry, a private balcony, and access to building amenities including a fitness center, rooftop terrace, and 24/7 concierge service.",
    mainImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
    ],
    amenities: [
      { name: "High-Speed Internet", icon: FaWifi, available: true },
      { name: "Parking Space", icon: FaParking, available: true },
      { name: "Swimming Pool", icon: FaSwimmingPool, available: true },
      { name: "Fitness Center", icon: FaDumbbell, available: true },
      { name: "Restaurant", icon: FaUtensils, available: true },
      { name: "Security System", icon: FaShieldAlt, available: true },
    ],
    agent: {
      name: "Sarah Johnson",
      phone: "+1 (555) 123-4567",
      email: "sarah.johnson@realestate.com",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      properties: 45,
    },
    nearbyPlaces: [
      { name: "Downtown Mall", distance: "0.2 km", type: "Shopping" },
      { name: "Central Park", distance: "0.5 km", type: "Recreation" },
      { name: "Metro Station", distance: "0.1 km", type: "Transportation" },
      { name: "City Hospital", distance: "1.2 km", type: "Healthcare" },
      { name: "University", distance: "2.0 km", type: "Education" },
    ],
    propertyHistory: [
      {
        date: "2023",
        event: "Renovated",
        description: "Complete interior renovation",
      },
      { date: "2020", event: "Built", description: "Property constructed" },
    ],
  };

  // Format price for display
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleImageChange = (index) => {
    setActiveImage(index);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles["details"]}>
      {/* Header */}
      <div className={styles["details-header"]}>
        <button
          className={styles["btn-17"]}
          onClick={() => navigate("/department")}
        >
          <span className={styles["text-container"]}>
            <span className={styles["text"]}>
              <FaArrowLeft /> Back to Properties
            </span>
          </span>
        </button>
        <div className={styles["header-actions"]}>
          <button className={styles["action-btn"]} onClick={toggleFavorite}>
            <FaHeart className={isFavorite ? styles.favorite : ""} />
          </button>
          <button className={styles["action-btn"]}>
            <FaShare />
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className={styles["landing"]}>
        <div className={styles["hero-content"]}>
          <h1>{property.title}</h1>
          <p>{property.address}</p>
          <div className={styles["hero-price"]}>
            {formatPrice(property.price)}
          </div>
        </div>
        <div className={styles["hero-image"]}>
          <img src={property.images[activeImage]} alt={property.title} />
        </div>
      </div>

      {/* Summary Section */}
      <div className={styles["summary"]}>
        <h1 className={styles["section-title"]}>Property Overview</h1>
        <p>{property.description}</p>
      </div>

      {/* Main Content */}
      <div className={styles["details-content"]}>
        {/* Image Gallery */}
        <div className={styles["image-gallery"]}>
          <div className={styles["main-image"]}>
            <img src={property.images[activeImage]} alt={property.title} />
            <div className={styles["image-overlay"]}>
              <div className={styles["image-info"]}>
                <span className={styles["image-counter"]}>
                  {activeImage + 1} / {property.images.length}
                </span>
              </div>
            </div>
          </div>
          <div className={styles["thumbnail-images"]}>
            {property.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${property.title} ${index + 1}`}
                className={activeImage === index ? "active" : ""}
                onClick={() => handleImageChange(index)}
              />
            ))}
          </div>
        </div>

        {/* Property Info */}
        <div className={styles["property-info"]}>
          {/* Key Details */}
          <div className={styles["key-details"]}>
            <div className={styles["detail-item"]}>
              <FaBed />
              <span>{property.bedrooms} Bedrooms</span>
            </div>
            <div className={styles["detail-item"]}>
              <FaBath />
              <span>{property.bathrooms} Bathrooms</span>
            </div>
            <div className={styles["detail-item"]}>
              <FaRulerCombined />
              <span>{property.area} sq ft</span>
            </div>
            <div className={styles["detail-item"]}>
              <FaParking />
              <span>{property.parking} Parking</span>
            </div>
          </div>

          {/* Description */}
          <div className={styles["description-section"]}>
            <h3>Description</h3>
            <p>{property.longDescription}</p>
          </div>

          {/* Property Details */}
          <div className={styles["property-details-section"]}>
            <h3>Property Details</h3>
            <div className={styles["details-grid"]}>
              <div className={styles["detail-row"]}>
                <span className={styles["detail-label"]}>Property Type:</span>
                <span className={styles["detail-value"]}>{property.type}</span>
              </div>
              <div className={styles["detail-row"]}>
                <span className={styles["detail-label"]}>Year Built:</span>
                <span className={styles["detail-value"]}>
                  {property.yearBuilt}
                </span>
              </div>
              <div className={styles["detail-row"]}>
                <span className={styles["detail-label"]}>Floor:</span>
                <span className={styles["detail-value"]}>{property.floor}</span>
              </div>
              <div className={styles["detail-row"]}>
                <span className={styles["detail-label"]}>Area:</span>
                <span className={styles["detail-value"]}>
                  {property.area} sq ft
                </span>
              </div>
              <div className={styles["detail-row"]}>
                <span className={styles["detail-label"]}>Parking:</span>
                <span className={styles["detail-value"]}>
                  {property.parking}
                </span>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className={styles["amenities-section"]}>
            <h3>Amenities</h3>
            <div className={styles["amenities-grid"]}>
              {property.amenities.map((amenity, index) => (
                <div key={index} className={styles["amenity-item"]}>
                  <amenity.icon
                    className={amenity.available ? "available" : "unavailable"}
                  />
                  <span>{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Nearby Places */}
          <div className={styles["nearby-section"]}>
            <h3>Nearby Places</h3>
            <div className={styles["nearby-grid"]}>
              {property.nearbyPlaces.map((place, index) => (
                <div key={index} className={styles["nearby-item"]}>
                  <div className={styles["place-info"]}>
                    <h4>{place.name}</h4>
                    <span className={styles["place-type"]}>{place.type}</span>
                  </div>
                  <span className={styles["place-distance"]}>
                    {place.distance}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Property History */}
          <div className={styles["history-section"]}>
            <h3>Property History</h3>
            <div className={styles["history-timeline"]}>
              {property.propertyHistory.map((event, index) => (
                <div key={index} className={styles["history-item"]}>
                  <div className={styles["history-date"]}>{event.date}</div>
                  <div className={styles["history-content"]}>
                    <h4>{event.event}</h4>
                    <p>{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className={styles["sidebar"]}>
          {/* Agent Info */}
          <div className={styles["agent-card"]}>
            <div className={styles["agent-header"]}>
              <img
                src={property.agent.image}
                alt={property.agent.name}
                className={styles["agent-image"]}
              />
              <div className={styles["agent-info"]}>
                <h3>{property.agent.name}</h3>
                <div className={styles["agent-rating"]}>
                  <FaStar />
                  <span>{property.agent.rating}</span>
                </div>
                <p>{property.agent.properties} properties</p>
              </div>
            </div>
            <div className={styles["agent-contact"]}>
              <FaUser />
              <a
                href={`tel:${property.agent.phone}`}
                className={styles["contact-link"]}
              >
                <FaPhone /> {property.agent.phone}
              </a>
              <a
                href={`mailto:${property.agent.email}`}
                className={styles["contact-link"]}
              >
                <FaEnvelope /> {property.agent.email}
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles["contact-form-card"]}>
            <h3>Schedule a Visit</h3>
            <form className={styles["contact-form"]}>
              <div className={styles["form-group"]}>
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className={styles["form-group"]}>
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className={styles["form-group"]}>
                <input type="tel" placeholder="Your Phone" required />
              </div>
              <div className={styles["form-group"]}>
                <select required>
                  <option value="">Preferred Date</option>
                  <option value="today">Today</option>
                  <option value="tomorrow">Tomorrow</option>
                  <option value="weekend">This Weekend</option>
                  <option value="next-week">Next Week</option>
                </select>
              </div>
              <div className={styles["form-group"]}>
                <textarea placeholder="Additional Message" rows="4"></textarea>
              </div>
              <button type="submit" className={styles["btn-17"]}>
                <span className={styles["text-container"]}>
                  <span className={styles["text"]}>Schedule Visit</span>
                </span>
              </button>
            </form>
          </div>

          {/* Quick Actions */}
          <div className={styles["quick-actions"]}>
            <button className={styles["btn-17"]} action-button primary>
              <FaShoppingCart /> Add to Cart
            </button>
            <button className={styles["btn-17"]} action-button secondary>
              <FaPhone /> Call Agent
            </button>
            <button className={styles["btn-17"]} action-button secondary>
              <FaEnvelope /> Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailsdepartment;
