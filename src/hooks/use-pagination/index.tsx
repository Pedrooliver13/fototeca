import { useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';

export const usePagination = (currentPage = 1, totalResults = 40) => {
  const Router = useRouter();
  const baseUrl = Router.pathname;

  const limit = 12;
  const lastPage = useMemo(
    () => Math.trunc(totalResults / limit) + 1,
    [totalResults]
  );

  const handleNextPage = useCallback(() => {
    return Router.push(`${baseUrl}/?page=${currentPage + 1}`);
  }, [currentPage, baseUrl, Router]);

  const handlePrevPage = useCallback(() => {
    return Router.push(`${baseUrl}/?page=${currentPage - 1}`);
  }, [currentPage, baseUrl, Router]);

  const handlePageChange = useCallback(
    (page) => {
      return Router.push(`${baseUrl}/?page=${page}`);
    },
    [baseUrl, Router]
  );

  return { handleNextPage, handlePrevPage, handlePageChange, lastPage };
};
