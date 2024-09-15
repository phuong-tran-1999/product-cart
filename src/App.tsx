import { useRef } from "react";
import { Cart } from "./components/Cart";
import { ConfirmDialog } from "./components/ConfirmDialog";
import { ProductList } from "./components/ProductList";
import { useCartStore } from "./store/store";

function App() {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const resetCart = useCartStore((state) => state.reset);

    const openDialog = () => {
        dialogRef.current?.showModal();
    };

    const closeDialog = () => {
        dialogRef.current?.close();
    };

    const onConfirmOrder = () => {
        resetCart();
        closeDialog();
    };

    return (
        <>
            <ConfirmDialog ref={dialogRef} handleClose={closeDialog} handleConfirm={onConfirmOrder}></ConfirmDialog>

            <div className="mx-auto flex flex-col items-start justify-start gap-8 lg:max-w-7xl lg:flex-row xl:max-w-screen-2xl">
                <ProductList></ProductList>
                <Cart openDialog={openDialog}></Cart>
            </div>
        </>
    );
}

export default App;
