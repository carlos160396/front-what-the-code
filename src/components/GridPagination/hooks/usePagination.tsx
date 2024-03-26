import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const usePagination = (totalRegisters: number) => {
  const params = useSearchParams();
  const router = useRouter();
  const limit = Number(params.get("limit"));
  const offset = params.get("offset");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    calcPagination();
  }, []);

  const recordsPerPage = limit ? Number(limit) : 20;
  const sequence = offset ? Number(offset) : 20;
  function calcPagination() {
    setCurrentPage(sequence);
  }
  const prevPage = () => {
    const newCurrent = sequence - recordsPerPage;
    setCurrentPage(newCurrent);
    router.push(`/pokemons?limit=${recordsPerPage}&offset=${newCurrent}`);
  };
  const nextPage = () => {
    const newCurrent = sequence + recordsPerPage;
    setCurrentPage(newCurrent);
    router.push(`/pokemons?limit=${recordsPerPage}&offset=${newCurrent}`);
  };

  return {
    nextPage,
    prevPage,
    currentPage,
  };
};

export default usePagination;
