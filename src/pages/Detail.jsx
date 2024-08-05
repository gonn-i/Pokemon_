import DetailItem from '../components/DetailItem';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchDetail } from '../store/pokemon-actions';
import { useEffect } from 'react';

const Detatil = () => {
  const id = useParams().id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetail(id));
  }, [dispatch]);

  return (
    <>
      <DetailItem />
    </>
  );
};

export default Detatil;
