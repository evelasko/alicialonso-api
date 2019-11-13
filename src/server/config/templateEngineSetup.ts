import { ServerLoader } from '@tsed/common'
import hbs from 'express-handlebars'
import cons from 'consolidate'

export const templateEngineSetup = (tsed: ServerLoader): void => {
    tsed.set('views', tsed.settings.get('viewsDir'))
    tsed.engine('hbs', cons.handlebars)
}
