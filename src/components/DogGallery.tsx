import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDogs } from "../store/dogSlice";
import { RootState, AppDispatch } from "../store/store"; // Импортируйте AppDispatch
import styles from "./dogGallery.module.scss";

const DogGallery: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>(); // Укажите тип для dispatch
  const { dogs, loading, error } = useSelector(
    (state: RootState) => state.dogs
  );

  useEffect(() => {
    dispatch(fetchDogs());
  }, [dispatch]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className={styles.gallery}>
      {dogs.map((dog, index) => (
        <div key={index} className={styles.card}>
          <img src={dog} alt={`Dog ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default DogGallery;
