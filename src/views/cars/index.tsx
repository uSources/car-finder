import InfiniteScroll from "react-infinite-scroll-component";

import { Alert, Progress } from "$/components";
import { CarCard } from "$/containers";
import { useInfiniteModels } from "$/hooks";

export default function Cars() {
  const { models, isSuccess, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteModels();

  if (isLoading) {
    return <Progress label="Cargando..." />;
  }

  if (models?.data.length === 0) {
    return (
      <div className="max-w-md">
        <Alert>No hay modelos disponibles</Alert>
      </div>
    );
  }

  return (
    <InfiniteScroll
      className="max-w-6xl grid xl:grid-cols-3 grid-cols-2 gap-4"
      dataLength={models?.data?.length || 0}
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      scrollThreshold={1}
      loader={<Progress label="Cargando..." />}
    >
      {isSuccess &&
        models?.data?.map((model) => {
          return <CarCard model={model} key={model.id} />;
        })}
    </InfiniteScroll>
  );
}
