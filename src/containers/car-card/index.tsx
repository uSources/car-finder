import Image from "next/image";

import { Badge, Card } from "$/components";

import type { CarCardProperties } from "./types";

export default function CarCard({
  model: {
    name,
    make: { name: modelName },
  },
}: CarCardProperties) {
  return (
    <Card
      figure={
        <Image
          height={200}
          width={500}
          className="bg-white"
          src="/placeholder.png"
          alt="Shoes"
        />
      }
    >
      <h2 className="card-title">
        <Badge label={modelName} />
        {name}
      </h2>
    </Card>
  );
}
