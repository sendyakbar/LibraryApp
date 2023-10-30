import axios from 'axios';

const BASE_URL = 'https://openlibrary.org/';

type Author = {
  key: string;
  name: string;
};

export type Work = {
  authors: Author[];
  availability: {
    available_to_borrow: boolean;
    available_to_browse: boolean;
    available_to_waitlist: boolean;
    identifier: string;
    is_browseable: boolean;
    is_lendable: boolean;
    is_previewable: boolean;
    is_printdisabled: boolean;
    is_readable: boolean;
    is_restricted: boolean;
    isbn: string;
    last_loan_date: string | null;
    last_waitlist_date: string | null;
    num_waitlist: string | null;
    oclc: string | null;
    openlibrary_edition: string;
    openlibrary_work: string;
    status: string;
    __src__: string;
  };
  cover_edition_key: string;
  cover_id: number;
  edition_count: number;
  first_publish_year: number;
  has_fulltext: boolean;
  ia: string;
  ia_collection: string[];
  key: string;
  lending_edition: string;
  lending_identifier: string;
  lendinglibrary: boolean;
  printdisabled: boolean;
  public_scan: boolean;
  subject: string[];
  title: string;
};

export type ResponseType = {
  key: string;
  name: string;
  subject_type: string;
  work_count: number;
  works: Work[];
};

export const getBooksByGenre = async (
  genre: string,
  offset: number,
): Promise<ResponseType> => {
  try {
    const {data} = await axios.get<ResponseType>(
      `${BASE_URL}/subjects/${genre}.json`,
      {
        params: {
          limit: 4,
          offset,
        },
      },
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};
