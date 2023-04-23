import { ArrayParam, StringParam, useQueryParam } from "use-query-params";

import { FormControl, Input, Select, DropdownCheckbox } from "$/components";
import { useMakes, useOrders, useDebounceStringParam } from "$/hooks";

export default function Filters() {
  const { makes } = useMakes();
  const { orders } = useOrders();

  const [name, setName] = useDebounceStringParam("name", 500);
  const [make, setMake] = useQueryParam("make", ArrayParam);
  const [order, setOrder] = useQueryParam("order", StringParam);

  const handleMakeChange = (values: Array<string | null>) => {
    setMake(values);
  };

  const handleNameChange = (value: string) => {
    setName(value);
  };

  const handleOrderChange = (value: string) => {
    setOrder(value);
  };

  return (
    <div className="flex items-center gap-4 w-full max-w-6xl">
      <div className="flex xl:flex-row flex-col w-full gap-4">
        <FormControl label="Búsqueda por nombre:">
          <Input
            value={name || undefined}
            onChange={(e) => handleNameChange(e.target.value)}
            placeholder="Buscar por..."
          />
        </FormControl>
        <FormControl label="Ordenar por:">
          <Select
            value={order || undefined}
            options={orders}
            onChange={(e) => handleOrderChange(e.target.value)}
            placeholder="Ordenar por..."
          />
        </FormControl>
        <FormControl label="Filtrar por fabricante:">
          <DropdownCheckbox
            label="Fabricante"
            options={makes}
            className="grid grid-cols-1 xl:grid-cols-4"
            values={make || undefined}
            onChange={handleMakeChange}
          />
        </FormControl>
      </div>
    </div>
  );
}
