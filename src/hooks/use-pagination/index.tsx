import { useCallback } from 'react';
import { useRouter } from 'next/router';

export const usePagination = (currentPage = 1) => {
  const Router = useRouter();
  const baseUrl = Router.pathname;

  const handleNextPage = useCallback(() => {
    return Router.push(`${baseUrl}/?page=${currentPage + 1}`);
  }, [currentPage, baseUrl, Router]);

  const handlePrevPage = useCallback(() => {
    return Router.push(`${baseUrl}/?page=${currentPage + 1}`);
  }, [currentPage, baseUrl, Router]);

  return { handleNextPage, handlePrevPage };
};
