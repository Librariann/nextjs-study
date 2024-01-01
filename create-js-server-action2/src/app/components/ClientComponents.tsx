import { myAction } from "@/lib/actions";

const ClientComponents = () => {
  return (
    <form action={myAction}>
      <button type="submit">Add to Cart</button>
    </form>
  );
};

export default ClientComponents;
