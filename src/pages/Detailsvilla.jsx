import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import styles from "../style/Detailsvilla.module.css";
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

const Detailsvilla = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock data for the specific villa
  const villa = {
    id: parseInt(id),
    title: "Luxury Villa with Pool",
    type: "villa",
    price: 850000,
    location: "Beverly Hills",
    address: "456 Luxury Lane, Beverly Hills, CA 90210",
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    yearBuilt: 2022,
    floor: 1,
    parking: 3,
    rating: 4.9,
    reviews: 89,
    featured: true,
    description:
      "This stunning luxury villa offers the perfect blend of modern design and timeless elegance. Located in the prestigious Beverly Hills neighborhood, this property features high-end finishes, smart home technology, and breathtaking city views. The open-concept design creates a spacious feel, while the premium appliances and fixtures add a touch of sophistication to everyday living.",
    longDescription:
      "Step into luxury with this meticulously designed 4-bedroom, 3-bathroom villa that redefines upscale living. The property boasts floor-to-ceiling windows that flood the space with natural light and offer spectacular city skyline views. The gourmet kitchen features quartz countertops, stainless steel appliances, and a breakfast bar perfect for casual dining. The master suite includes a walk-in closet and an en-suite bathroom with dual vanities and a rainfall shower. Additional features include in-unit laundry, a private pool, and access to building amenities including a fitness center, rooftop terrace, and 24/7 concierge service.",
    mainImage:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    ],
    amenities: [
      { name: "Private Pool", icon: FaSwimmingPool, available: true },
      { name: "High-Speed Internet", icon: FaWifi, available: true },
      { name: "Garage Parking", icon: FaParking, available: true },
      { name: "Home Gym", icon: FaDumbbell, available: true },
      { name: "Chef's Kitchen", icon: FaUtensils, available: true },
      { name: "Security System", icon: FaShieldAlt, available: true },
    ],
    agent: {
      name: "Michael Rodriguez",
      phone: "+1 (555) 987-6543",
      email: "michael.rodriguez@luxuryrealestate.com",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      properties: 67,
    },
    nearbyPlaces: [
      { name: "Beverly Hills Shopping", distance: "0.5 km", type: "Shopping" },
      { name: "Rodeo Drive", distance: "0.8 km", type: "Luxury Shopping" },
      { name: "Beverly Hills Hotel", distance: "1.2 km", type: "Hospitality" },
      { name: "UCLA Medical Center", distance: "2.5 km", type: "Healthcare" },
      {
        name: "Beverly Hills Country Club",
        distance: "1.8 km",
        type: "Recreation",
      },
    ],
    propertyHistory: [
      {
        date: "2022",
        event: "Built",
        description: "Property constructed with luxury finishes",
      },
      {
        date: "2023",
        event: "Renovated",
        description: "Kitchen and bathroom upgrades",
      },
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

  // Animate text function (matching home page style)
  const handleImageChange = (index) => {
    setActiveImage(index);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.details}>
      {/* Header */}
      <div className={styles["details-header"]}>
        <button
          className={styles["btn-17 back-btn"]}
          onClick={() => navigate("/villa")}
        >
          <span className={styles["text-container"]}>
            <span className={styles.text}>
              <FaArrowLeft /> Back to Villas
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
      <div className={styles.landing}>
        <div className={styles["hero-content"]}>
          <h1>{villa.title}</h1>
          <p>{villa.address}</p>
          <div className={styles["hero-price"]}>{formatPrice(villa.price)}</div>
        </div>
        <div className={styles["hero-image"]}>
          <img src={villa.images[activeImage]} alt={villa.title} />
        </div>
      </div>

      {/* Summary Section */}
      <div className={styles.summary}>
        <h1 className={styles["section-title"]}>Villa Overview</h1>
        <p>{villa.description}</p>
      </div>

      {/* Main Content */}
      <div className={styles["details-content"]}>
        <div className={styles["image-gallery"]}>
          <div className={styles["main-image"]}>
            <div className={styles["main-image"]}>
              <img src={villa.images[activeImage]} alt={villa.title} />
              <div className={styles["image-overlay"]}>
                <div className={styles["image-info"]}>
                  <span className={styles["image-counter"]}>
                    {activeImage + 1} / {villa.images.length}
                  </span>
                </div>
              </div>
            </div>
            <div className={styles["thumbnail-images"]}>
              {villa.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${villa.title} ${index + 1}`}
                  className={activeImage === index ? "active" : ""}
                  onClick={() => handleImageChange(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Villa Info */}
        <div className={styles["property-info"]}>
          {/* Key Details */}
          <div className={styles["key-details"]}>
            <div className={styles["detail-item"]}>
              <FaBed />
              <span>{villa.bedrooms} Bedrooms</span>
            </div>
            <div className={styles["detail-item"]}>
              <FaBath />
              <span>{villa.bathrooms} Bathrooms</span>
            </div>
            <div className={styles["detail-item"]}>
              <FaRulerCombined />
              <span>{villa.area} sq ft</span>
            </div>
            <div className={styles["detail-item"]}>
              <FaParking />
              <span>{villa.parking} Parking</span>
            </div>
          </div>

          {/* Description */}
          <div className={styles["description-section"]}>
            <h3 className={styles["section-title"]}>Description</h3>
            <p>{villa.longDescription}</p>
          </div>

          {/* Villa Details */}
          <div className={styles["property-details-section"]}>
            <h3 className={styles["section-title"]}>Villa Details</h3>
            <div className={styles["details-grid"]}>
              <div className={styles["detail-row"]}>
                <span className={styles["detail-label"]}>Property Type:</span>
                <span className={styles["detail-value"]}>{villa.type}</span>
              </div>
              <div className={styles["detail-row"]}>
                <span className={styles["detail-label"]}>Year Built:</span>
                <span className={styles["detail-value"]}>
                  {villa.yearBuilt}
                </span>
              </div>
              <div className={styles["detail-row"]}>
                <span className={styles["detail-label"]}>Floor:</span>
                <span className={styles["detail-value"]}>{villa.floor}</span>
              </div>
              <div className={styles["detail-row"]}>
                <span className={styles["detail-label"]}>Area:</span>
                <span className={styles["detail-value"]}>
                  {villa.area} sq ft
                </span>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className={styles["amenities-section"]}>
            <h3 className={styles["section-title"]}>Amenities</h3>
            <div className={styles["amenities-grid"]}>
              {villa.amenities.map((amenity, index) => (
                <div key={index} className={styles["amenity-item"]}>
                  <amenity.icon
                    className={
                      amenity.available ? styles.available : styles.unavailable
                    }
                  />
                  <span>{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Nearby Places */}
          <div className={styles["nearby-section"]}>
            <h3 className={styles["section-title"]}>Nearby Places</h3>
            <div className={styles["nearby-grid"]}>
              {villa.nearbyPlaces.map((place, index) => (
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
            <h3 className={styles["section-title"]}>Property History</h3>
            <div className={styles["history-timeline"]}>
              {villa.propertyHistory.map((event, index) => (
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
        <div className={styles.sidebar}>
          {/* Agent Info */}
          <div className={styles["agent-card"]}>
            <div className={styles["agent-header"]}>
              <img
                src={villa.agent.image}
                alt={villa.agent.name}
                className={styles["agent-image"]}
              />
              <div className={styles["agent-info"]}>
                <h3>{villa.agent.name}</h3>
                <div className={styles["agent-rating"]}>
                  <FaStar />
                  <span>{villa.agent.rating}</span>
                </div>
                <p>{villa.agent.properties} properties</p>
              </div>
            </div>
            <div className={styles["agent-contact"]}>
              <a
                href={`tel:${villa.agent.phone}`}
                className={styles["contact-link"]}
              >
                <FaPhone /> {villa.agent.phone}
              </a>
              <a
                href={`mailto:${villa.agent.email}`}
                className={styles["contact-link"]}
              >
                <FaEnvelope /> {villa.agent.email}
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
                  <span className={styles.text}>Schedule Visit</span>
                </span>
              </button>
            </form>
          </div>

          {/* Quick Actions */}
          <div className={styles["quick-actions"]}>
            <button className={styles["btn-17 action-button primary"]}>
              <FaShoppingCart /> Add to Cart
            </button>
            <button className={styles["btn-17 action-button secondary"]}>
              <FaPhone /> Call Agent
            </button>
            <button className={styles["btn-17 action-button secondary"]}>
              <FaEnvelope /> Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailsvilla;
