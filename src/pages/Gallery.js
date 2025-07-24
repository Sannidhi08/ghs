import React, { useState } from 'react';
import { motion } from 'framer-motion';

const excludedImages = [10, 14, 20];

const galleryItems = Array.from({ length: 28 }, (_, i) => i + 1)
  .filter((num) => !excludedImages.includes(num))
  .map((num) => ({
    type: 'image',
    src: `/assets/${num}.jpg`,
  }));

galleryItems.push({
  type: 'video',
  src: '/assets/29.mp4',
});

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const openModal = (item) => setSelectedMedia(item);
  const closeModal = () => setSelectedMedia(null);

  return (
    <section className="bg-blue-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-10">Gallery</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
              onClick={() => openModal(item)}
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="relative">
                  <video
                    src={item.src}
                    className="w-full h-48 object-cover"
                    muted
                    loop
                  />
                  <button
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm font-semibold hover:bg-opacity-70 transition"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(item);
                    }}
                  >
                    ▶ Play Video
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-400"
            >
              &times;
            </button>

            {selectedMedia.type === 'image' ? (
              <img
                src={selectedMedia.src}
                alt="Enlarged"
                className="w-full max-h-[80vh] object-contain rounded-md"
              />
            ) : (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                className="w-full max-h-[80vh] rounded-md"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;