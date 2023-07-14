import {svg,circle} from './loader.module.css'

export default function Loader() {
  return (
    <svg className={svg} viewBox="25 25 50 50">
        <circle className={circle} r="20" cy="50" cx="50"></circle>
    </svg>
  )
}
