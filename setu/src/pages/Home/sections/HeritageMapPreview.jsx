import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, BookOpen, Home as HomeIcon, PlusCircle, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { memoryPins } from '../../../data/mockData';
import { SectionHeader } from '../../../components/ui/SectionHeader';
import { PrimaryBtn, OutlineBtn } from '../../../components/ui/Button';
import './HeritageMapPreview.css';

// Fix Leaflet default icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Custom icons by type
function createPinIcon(type) {
  const color = type === 'support' ? '#4A7C59' : '#8B1A1A';
  return L.divIcon({
    className: '',
    html: `<div class="map-pin map-pin--${type}" style="background:${color}">
             <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5">
               <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
             </svg>
           </div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -34],
  });
}

const mapFeatures = [
  { icon: BookOpen, text: 'Community-submitted cultural memories', hindi: 'सांस्कृतिक स्मृतियाँ' },
  { icon: HomeIcon, text: 'Verified NGO support resources', hindi: 'एनजीओ संसाधन' },
  { icon: MapPin,   text: 'Peer-reviewed and community-moderated', hindi: 'समुदाय-सत्यापित' },
];

export function HeritageMapPreview() {
  const ref = useScrollReveal();
  const [activeLayer, setActiveLayer] = useState('cultural');
  const [modalOpen, setModalOpen] = useState(false);

  const filteredPins = activeLayer === 'all'
    ? memoryPins
    : memoryPins.filter((p) => p.type === activeLayer);

  return (
    <section id="heritage-map" className="heritage-map section-pad" ref={ref}>
      <div className="heritage-map__inner container">

        {/* ── Map Side 60% ── */}
        <div className="heritage-map__map-col reveal">
          {/* Layer toggle */}
          <div className="heritage-map__toggle">
            {['cultural', 'support', 'all'].map((layer) => (
              <button
                key={layer}
                className={`heritage-map__toggle-btn ${activeLayer === layer ? 'active' : ''}`}
                onClick={() => setActiveLayer(layer)}
              >
                {layer === 'cultural' ? 'Cultural Memory' : layer === 'support' ? 'Support Resources' : 'All Layers'}
              </button>
            ))}
          </div>

          {/* Map */}
          <div className="heritage-map__map-wrap">
            <MapContainer
              center={[22.5, 80.0]}
              zoom={4}
              scrollWheelZoom={false}
              className="heritage-map__leaflet"
              zoomControl={true}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                className="sepia-map"
              />
              {filteredPins.map((pin) => (
                <Marker
                  key={pin.id}
                  position={[pin.lat, pin.lng]}
                  icon={createPinIcon(pin.type)}
                >
                  <Popup className="setu-popup">
                    <div className="popup__inner">
                      <span className="popup__category">{pin.category}</span>
                      <h4 className="popup__title">{pin.title}</h4>
                      <p className="popup__desc">{pin.description}</p>
                      <div className="popup__meta">
                        <span>{pin.contributor}</span>
                        {pin.year && <span>{pin.year}</span>}
                      </div>
                      <div className="popup__tags">
                        {pin.tags.slice(0, 3).map((t) => (
                          <span key={t} className="popup__tag">{t}</span>
                        ))}
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
            <div className="heritage-map__map-overlay" />
          </div>

          <p className="heritage-map__map-note">
            Click any pin to explore a memory. <span lang="hi">किसी पिन पर क्लिक करें।</span>
          </p>
        </div>

        {/* ── Content Side 40% ── */}
        <div className="heritage-map__content reveal reveal-delay-2">
          <SectionHeader
            script="The Living Archive"
            devanagari="जीवित अभिलेखागार"
            heading="Heritage Memory Map"
            body="A decentralised cartographic record of human culture — making the erasure of shared heritage structurally difficult."
          />

          <ul className="heritage-map__features">
            {mapFeatures.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <li key={i} className="heritage-map__feat">
                  <div className="heritage-map__feat-icon">
                    <Icon size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="heritage-map__feat-text">{feat.text}</p>
                    <p className="heritage-map__feat-hi" lang="hi">{feat.hindi}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="heritage-map__ctas">
            <PrimaryBtn onClick={() => setModalOpen(true)}>
              <PlusCircle size={15} />
              Add a Memory
            </PrimaryBtn>
            <OutlineBtn>
              View Full Map
              <ChevronRight size={15} />
            </OutlineBtn>
          </div>

          {/* Pin count */}
          <div className="heritage-map__count">
            <span className="heritage-map__count-num">{memoryPins.length}</span>
            <span className="heritage-map__count-label">
              memories anchored<br />
              <span lang="hi">स्मृतियाँ अंकित</span>
            </span>
          </div>
        </div>
      </div>

      {/* Add Memory Modal (stub) */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" onClick={() => setModalOpen(false)}>×</button>
            <h3 className="modal__title">Add a Memory</h3>
            <p className="modal__sub" lang="hi">एक स्मृति जोड़ें</p>
            <p className="modal__note">
              Memory submission requires authentication. <br />
              <strong>Full feature available in Phase 2</strong> with Supabase integration.
            </p>
            <div className="modal__phase-tag">Phase 2 Feature</div>
          </div>
        </div>
      )}
    </section>
  );
}
