import {
  HistoryContainer,
  HistoryList,
  Status,
} from './styles';

export function History() {
  return (
    <HistoryContainer>
      <h1>
        Meu historico
      </h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duracao</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Ha cerca de 2 horas</td>
              <td>
                <Status statusColor="yellow">
                  Concluido
                </Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Ha cerca de 2 horas</td>
              <td>
                <Status statusColor="yellow">
                  Concluido
                </Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Ha cerca de 2 horas</td>
              <td>
                <Status statusColor="yellow">
                  Concluido
                </Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Ha cerca de 2 horas</td>
              <td>
                <Status statusColor="yellow">
                  Concluido
                </Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Ha cerca de 2 horas</td>
              <td>
                <Status statusColor="yellow">
                  Concluido
                </Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Ha cerca de 2 horas</td>
              <td>
                <Status statusColor="yellow">
                  Concluido
                </Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Ha cerca de 2 horas</td>
              <td>
                <Status statusColor="yellow">
                  Concluido
                </Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
