import styles from './selectText.module.css'

interface ISelectTextProps {
  selects: {label: string}[];
}
export default function SelectText(props: ISelectTextProps = {selects: [{label: 'Select'}, {label: 'Select'}, {label: 'Select'}]}) {
  const {selects} = props;
  
  return (
    <>
    {selects?.map(({label}, index) => (
      <div key={`${label} - ${index}`} className={styles.boxContainer}>
        <span className={styles.box}></span>
        <div className={styles.text}>{label}</div>
      </div>
    ))}
    </>
    
  )
}