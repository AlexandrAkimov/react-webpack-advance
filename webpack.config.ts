import path from 'path'
import webpack from 'webpack'

import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { BuildEnv, BuildPaths } from './config/build/types/config'

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    build: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
  }

  const mode = env.mode || 'development'
  const isDev = mode === 'development'
  const port = env.port || 3000
  const apiUrl = env.apiUrl || 'http://localhost:8000'
  const project = 'frontend'

  const config: webpack.Configuration = buildWebpackConfig({
    mode, paths, port, isDev, apiUrl, project,
  })

  return config
}
