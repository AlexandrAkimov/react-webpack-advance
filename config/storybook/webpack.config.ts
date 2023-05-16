import path from 'path'
import webpack, { RuleSetRule } from 'webpack'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { BuildPaths } from '../build/types/config'

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  }

  config.resolve?.extensions?.push('.ts', '.tsx')
  config.resolve?.modules?.push(paths.src)

  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module?.rules?.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }

    return rule
  })

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  })
  config.module?.rules?.push(buildCssLoader(true))
  return config
}
