import Column from '../../../Layout/Column';
import BigCard from './BigCard';
import useToggle from '../../../hooks/useToggle';
import SmallCard from './SmallCard';
import {
  CardsCouple,
  getBigCardHoverRotation,
  getBigCardHoverTranslate,
  getSmallCardHoverRotation,
  getSmallCardHoverTranslate,
} from './CardsUtils';

const cards: CardsCouple[] = [
  {
    bigCardImage: '../../../assets/AnimationCards/aot.jpg',
    smallCardImage: '../../../assets/AnimationCards/dragonBall.jpg',
  },
  {
    bigCardImage: '../../../assets/AnimationCards/demonSlayer.jpg',
    smallCardImage: '../../../assets/AnimationCards/zoro.jpg',
  },
  {
    bigCardImage: '../../../assets/AnimationCards/naruto.jpg',
    smallCardImage: '../../../assets/AnimationCards/waves.jpg',
  },
  {
    bigCardImage: '../../../assets/AnimationCards/jujutsu.jpg',
    smallCardImage: '../../../assets/AnimationCards/dragon.jpg',
  },
];

const HoverCards = () => {
  const [isHovering, toggleIsHovering] = useToggle(false);

  return (
    <Column height="100%" justifyContent="center" alignItems="center">
      <Column
        alignItems="center"
        width="250px"
        height="300px"
        sx={{ backgroundColor: 'green', position: 'absolute' }}
        onMouseEnter={toggleIsHovering}
        onMouseLeave={toggleIsHovering}
      >
        {cards.map((card, index) => (
          <>
            <SmallCard
              imageUrl={card.smallCardImage}
              sx={{
                translate: isHovering ? getSmallCardHoverTranslate(index) : '5%, 100%',
                rotate: isHovering ? getSmallCardHoverRotation(index) : `${1 * index}deg`,
                transition: '1s cubic-bezier(.05,.43,.25,.95)',
              }}
            />
            <BigCard
              imageUrl={card.bigCardImage}
              sx={{
                translate: isHovering ? getBigCardHoverTranslate(index) : '5%, 100%',
                rotate: isHovering ? getBigCardHoverRotation(index) : `${1 * index}deg`,
                transition: '1s cubic-bezier(.05,.43,.25,.95)',
              }}
            />
          </>
        ))}
      </Column>
    </Column>
  );
};

export default HoverCards;
