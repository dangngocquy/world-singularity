import React, { lazy } from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'



const Chart = () => {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


  return (
    <>
      <CCard className="Char_width">
        <CCardBody>
          <CRow>
            <CCol sm={7}>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '100%', width: '100%'}}
            data={{
              labels: ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'],
              datasets: [
                {
                  label: 'Tổng lượt truy cập',
                  backgroundColor: 'rgba(228, 255, 238, 0.1)',
                  borderColor: 'rgb(17, 236, 229)',
                  pointHoverBackgroundColor: 'green',
                  borderWidth: 1,
                  data: [
                    random(0, 200),
                    random(0, 200),
                    random(0, 200),
                    random(0, 200),
                    random(0, 200),
                    random(0, 200),
                    random(0, 200),
                  ],
                  fill: true,
                },
                {
                  label: 'Tổng số người dùng sử dụng',
                  backgroundColor: 'transparent',
                  borderColor: 'rgb(15, 23, 36)',
                  pointHoverBackgroundColor: 'green',
                  borderWidth: 1,
                  data: [
                    random(0, 200),
                    random(0, 200),
                    random(0, 200),
                    random(0, 200),
                    random(0, 200),
                    random(0, 200),
                    random(0, 200),
                  ],
                },
                {
                  label: 'Tổng lượt tải xuống',
                  backgroundColor: 'transparent',
                  borderColor: 'red',
                  pointHoverBackgroundColor: 'rgb(220, 53, 69, 0.9)',
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: [65, 65, 65, 65, 65, 65, 65],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            
          </CRow>
        </CCardFooter>
      </CCard>

      
    </>
  )
}

export default Chart
