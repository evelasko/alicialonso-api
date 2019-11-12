import { ServerLoader } from '@tsed/common'
import hbs from 'express-handlebars'

export const templateEngineSetup = (tsed: ServerLoader): void => {
    tsed.set('views', tsed.settings.get('viewsDir'))
    tsed.engine('hbs', hbs({ extname: '.hbs' }))
}
