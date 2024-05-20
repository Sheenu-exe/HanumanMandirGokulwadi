'use client'
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../API/firebase.config';
import { Layout } from '../components/Layout';
import 'yet-another-react-lightbox/styles.css'; // Import lightbox styles
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css'; // Import thumbnail plugin styles

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "gallery"));
                const imageData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setImages(imageData);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    if (loading) return <Layout><p>Loading...</p></Layout> ;
    if (error) return <p>Error: {error}</p>;

    return (
        <Layout>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    {images.map((image, index) => (
                        <img
                            key={image.id}
                            src={image.url}
                            alt={image.name}
                            className={`w-full h-full rounded shadow-sm object-cover cursor-pointer ${index === 0 || index === images.length - 1 ? 'col-span-2 row-span-2 min-h-96' : 'min-h-48'} dark:bg-gray-500 aspect-square`}
                            onClick={() => {
                                setPhotoIndex(index);
                                setIsOpen(true);
                            }}
                        />
                    ))}
                </div>
                {isOpen && (
                    <Lightbox
                        open={isOpen}
                        index={photoIndex}
                        close={() => setIsOpen(false)}
                        slides={images.map(image => ({ src: image.url }))}
                        plugins={[Thumbnails]}
                    />
                )}
            </section>
        </Layout>
    );
};

export default Gallery;
