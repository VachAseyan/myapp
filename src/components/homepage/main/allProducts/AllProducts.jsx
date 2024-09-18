import { useState } from "react";
import ProductModal from "../../../productModal/ProductModal";
import { useSelector } from "react-redux";

function AllProduct() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filters = useSelector((state) => state.productTypeReducer.filters);
  const products = useSelector((state) => {
    if (filters.gender === 'female') {
      return state.productTypeReducer.femaleProductTypes
    }
    return state.productTypeReducer.maleProductTypes
  });

  const currentProduct = products ? products[filters.gender === 'female' ? filters.femaleTypeIndex : filters.maleTypeIndex] : undefined;
  const currentSubTypeIndex = filters.gender === 'female' ? filters.femaleSubTypeIndex : filters.maleSubTypeIndex;
  const currentSubType = currentProduct && currentProduct.subTypes ? currentProduct.subTypes[currentSubTypeIndex] : undefined;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div style={{
        display: 'flex',
        flexWrap: "wrap",
        padding: '20px',
        gap: '20px'
      }}>
        {
          currentProduct && currentSubType && currentSubType.products && currentSubType.products.length &&
          currentSubType.products.map((pr, index) => {
            return (
              <div key={index} style={{
                width: "194px",
                height: "170px",
                padding: '10px',
                gap: '20px',
                boxShadow: '2px 4px 10px rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: "center",
                flexDirection: 'column',
                borderRadius: "5px",
              }}>
                <img height={'114px'} width={'174px'} src={pr.imgUrl} />

                <div style={{
                  width: "174px",
                  height: "16px",
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  gap: '10px',

                }}>
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
            width: "38px",
            height: "38px",
            fontSize: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            border: "1px solid black",
            borderRadius: "5px",
            color: "#1F1617",
            boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.5)"

          }}
          onClick={openModal}>
          +
        </div>
      </div>
      <ProductModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default AllProduct;