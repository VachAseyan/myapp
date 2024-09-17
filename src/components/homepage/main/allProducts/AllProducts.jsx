import { useState } from "react";
import ModalComponent from "../../../modalComponent/ModalComponent";
import ProductModal from "../../../productModal/ProductModal";
 
function AllProduct() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div
                style={{
                    fontSize: "45px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer"
                }}
                onClick={openModal}
            >
                +
            </div>

            <ProductModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}

export default AllProduct;