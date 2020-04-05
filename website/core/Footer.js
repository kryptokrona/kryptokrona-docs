/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language='') {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    const repoUrl = `https://github.com/kryptokrona/kryptokrona-docs`
    return (
      <footer className="nav-footer" id="footer">
        

        <div>
          <section className="copyright">{this.props.config.copyright1}</section>
          <section className="copyright">{this.props.config.copyright2} <a href="https://opensource.org/licenses/MIT">MIT License</a></section>
          <section className="copyright">{this.props.config.copyright3} <a href="https://www.gnu.org/licenses/gpl-3.0.html">GNU General Public V3 License</a></section>
        </div>
      </footer>
    );
  }
}

module.exports = Footer;
