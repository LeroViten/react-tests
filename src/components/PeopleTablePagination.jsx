const LIMIT = 10;

export default function PeopleTablePagination({ page, total, onChange = () => {} }) {
  const totalPages = Math.ceil(total / LIMIT);

  return (
    <div style={{ margin: '10px auto', textAlign: 'center' }}>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(pageIndex => {
        const isActive = pageIndex === page;
        const action = () => {
          if (pageIndex !== page) {
            onChange(pageIndex);
          }
        };

        return isActive ? (
          <b
            key={pageIndex}
            onClick={action}
            style={{
              cursor: 'pointer',
              padding: 5,
              border: '1px solid black',
              borderRadius: 4,
              backgroundColor: '#b00b6940',
              marginRight: 2,
            }}
          >
            {' '}
            {pageIndex}{' '}
          </b>
        ) : (
          <span
            key={pageIndex}
            onClick={action}
            style={{
              cursor: 'pointer',
              padding: 5,
              border: '1px solid black',
              borderRadius: 4,
              marginRight: 2,
            }}
          >
            {' '}
            {pageIndex}{' '}
          </span>
        );
      })}
    </div>
  );
}
