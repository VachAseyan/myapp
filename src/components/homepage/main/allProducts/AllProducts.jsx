import {useState} from "react";
import ProductModal from "../../../productModal/ProductModal";
import {useSelector} from "react-redux";

function AllProduct() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filters = useSelector((state) => state.productTypeReducer.filters);
  const isFemale = filters.gender === 'female';
  const products = useSelector((state) => {
    if (isFemale) {
      return state.productTypeReducer.femaleProductTypes
    }
    return state.productTypeReducer.maleProductTypes
  });
  const currentProduct = products ? products[isFemale ? filters.femaleTypeIndex : filters.maleTypeIndex] : undefined
  const currentSubTypeIndex = isFemale ? filters.femaleSubTypeIndex : filters.maleSubTypeIndex
  const currentSubType = currentProduct && currentProduct.subTypes ? currentProduct.subTypes[currentSubTypeIndex] : undefined

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div style={{ display: 'flex', padding: '20px', gap: '20px' }}>
        {
          currentProduct && currentSubType && currentSubType.products && currentSubType.products.length &&
          currentSubType.products.map(pr => {
            return (<div style={{
              padding: '10px',
              gap: '20px',
              backgroundColor: 'grey',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <img height={'120px'} width={'120px'} src={pr.imgUrl}/>

              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', gap: '10px' }}>
                <div>
                  {pr.article}
                </div><div>
                  {pr.price}
              </div>
              </div>
            </div>
            )
          })
        }
        <div
          style={{
            fontSize: "45px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer"
          }}
          onClick={openModal}>
          +
        </div>
      </div>
      <ProductModal isOpen={isModalOpen} onClose={closeModal}/>
    </div>
  );
}

export default AllProduct;