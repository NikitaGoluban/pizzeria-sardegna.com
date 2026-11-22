import type { TFunction } from 'i18next'
import { useTranslation } from 'react-i18next'
import { additiveEntries, allergenEntries } from '../menuLegendData'
import type { MenuLegendEntry } from '../menuLegendData'

interface LegendListProps {
  entries: MenuLegendEntry[]
  translationGroup: 'allergens' | 'additives'
  translate: TFunction
}

function LegendList(props: LegendListProps) {
  return (
    <dl className="menu-legend-list">
      {props.entries.map((entry) => (
        <div className="menu-legend-entry" key={entry.code}>
          <dt>{entry.code}</dt>
          <dd>
            {props.translate(`menu.legend.${props.translationGroup}.${entry.translationKey}`, {
              defaultValue: entry.defaultLabel,
            })}
          </dd>
        </div>
      ))}
    </dl>
  )
}

export function MenuLegend() {
  const translation = useTranslation()

  return (
    <section className="content-section menu-legend" id="allergens">
      <h2>{translation.t('menu.legend.title')}</h2>
      <div className="menu-legend-columns">
        <div>
          <h3>{translation.t('menu.legend.allergensTitle')}</h3>
          <LegendList entries={allergenEntries} translationGroup="allergens" translate={translation.t} />
        </div>
        <div>
          <h3>{translation.t('menu.legend.additivesTitle')}</h3>
          <LegendList entries={additiveEntries} translationGroup="additives" translate={translation.t} />
        </div>
      </div>
    </section>
  )
}

