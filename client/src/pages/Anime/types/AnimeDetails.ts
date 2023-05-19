import AnimeSummary from './AnimeSummary';

interface AnimeDetails extends AnimeSummary {
  status: number;
  bannerImage: string;
  genres: string;
}

export default AnimeDetails;
