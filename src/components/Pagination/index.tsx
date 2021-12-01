import { usePagination } from 'hooks/use-pagination';
import { Container } from 'styles/container';
import { Props } from 'types/Pagination';

import * as S from './styles';

const Pagination = ({ currentPage = 1, totalResults }: Props) => {
  const { handleNextPage, handlePrevPage, handlePageChange, lastPage } =
    usePagination(currentPage, totalResults);

  return (
    <Container>
      <S.Wrapper>
        <button
          className={`prev ${currentPage <= 1 ? 'disable' : ''}`}
          onClick={handlePrevPage}
        >
          Anterior
        </button>

        <div>
          {currentPage >= 5 && (
            <button
              className={`${currentPage < 5 ? 'disable' : ''}`}
              onClick={() => handlePageChange(1)}
            >
              ...
            </button>
          )}
          {currentPage > 3 && (
            <button onClick={() => handlePageChange(currentPage - 3)}>
              {currentPage - 3}
            </button>
          )}
          {currentPage > 2 && (
            <button onClick={() => handlePageChange(currentPage - 2)}>
              {currentPage - 2}
            </button>
          )}
          {currentPage > 1 && (
            <button onClick={() => handlePageChange(currentPage - 1)}>
              {currentPage - 1}
            </button>
          )}

          <button className="active">{currentPage}</button>

          {currentPage < lastPage && (
            <button onClick={() => handlePageChange(currentPage + 1)}>
              {currentPage + 1}
            </button>
          )}
          {currentPage + 1 < lastPage && (
            <button onClick={() => handlePageChange(currentPage + 2)}>
              {currentPage + 2}
            </button>
          )}
          {currentPage + 2 < lastPage && (
            <button onClick={() => handlePageChange(currentPage + 3)}>
              {currentPage + 3}
            </button>
          )}
          <button
            className={`${lastPage === currentPage ? 'disable' : ''}`}
            onClick={() => handlePageChange(lastPage)}
          >
            ...
          </button>
        </div>

        <button
          className={`next ${lastPage === currentPage ? 'disable' : ''}`}
          onClick={handleNextPage}
        >
          Próximo
        </button>
      </S.Wrapper>
    </Container>
  );
};

export default Pagination;
