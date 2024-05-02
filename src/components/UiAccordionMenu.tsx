// API types
import { Accodion, AccodionContents } from '@/api/types';

//Hooks
import { useAccordion } from '@/utils/useAccordion';

//Style
import styles from '@/styles/components/uiAccordion.module.scss';

const Accordion = ({ title, data }: { title: string; data: Accodion }) => {
  //アコーディオンの開閉状態を管理する状態変数
  const { isOpen, setIsOpen, accordionRef } = useAccordion();

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`${styles.root}`}>
        <div className={styles.details}>
          <button
            onClick={() => toggleAccordion()}
            className={styles.heading}
            data-open={!isOpen}
          >
            <p className={styles.headingText}>{title}</p>
          </button>
          <div
            className={styles.content}
            aria-hidden={!isOpen}
            data-open={!isOpen}
            ref={accordionRef}
            style={{
              opacity: isOpen ? '1' : '0',
            }}
          >
            <div className="flex">
              {data.contents?.map((data: AccodionContents) => (
                <div key={data.id} className="w-1/3 py-8">
                  <h2>{data.name}</h2>
                  <figure className="max-w-full">
                    <img
                      src={data.img.url}
                      className="w-full"
                      width={data.img.width}
                      height={data.img.height}
                      alt=""
                    />
                  </figure>
                  <p>{data.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
